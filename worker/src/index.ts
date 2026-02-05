import { nanoid } from 'nanoid';

interface Env {
  R2: R2Bucket;
  ALLOWED_ORIGINS: string;
}

interface UserStats {
  messages: number;
  msgsPerDay: number;
  linesAdded: number;
  responseTimeMedian: number;
  multiClaudingPercent: number;
  languageCount: number;
  topLanguages: string[];
}

interface UserData {
  mascot: string;
  name: string;
  emoji: string;
  stats: UserStats;
}

interface Compatibility {
  score: number;
  verdict: string;
  sameEnergy: string[];
  plotTwists: string[];
}

interface ComparisonResult {
  version: number;
  createdAt: string;
  user1: UserData;
  user2: UserData;
  compatibility: Compatibility;
}

function getCorsHeaders(request: Request, env: Env): HeadersInit {
  const origin = request.headers.get('Origin') || '';
  const allowedOrigins = env.ALLOWED_ORIGINS.split(',').map(o => o.trim());

  // Check for exact match or localhost with any port
  const isAllowed = allowedOrigins.includes(origin) ||
    origin.match(/^http:\/\/localhost(:\d+)?$/);

  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function jsonResponse(data: unknown, status: number, request: Request, env: Env): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...getCorsHeaders(request, env),
    },
  });
}

// Counter file path
const COUNTER_KEY = 'codiac/stats/counter.json';

async function getCounter(env: Env): Promise<number> {
  try {
    const obj = await env.R2.get(COUNTER_KEY);
    if (obj) {
      const data = await obj.json() as { count: number };
      return data.count || 0;
    }
  } catch {}
  return 0;
}

async function incrementCounter(env: Env): Promise<number> {
  const current = await getCounter(env);
  const newCount = current + 1;
  await env.R2.put(COUNTER_KEY, JSON.stringify({ count: newCount, updatedAt: new Date().toISOString() }), {
    httpMetadata: { contentType: 'application/json' },
  });
  return newCount;
}

async function handleShare(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405, request, env);
  }

  let body: ComparisonResult;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400, request, env);
  }

  // Validate required fields
  if (!body.user1 || !body.user2 || !body.compatibility) {
    return jsonResponse({ error: 'Missing required fields: user1, user2, compatibility' }, 400, request, env);
  }

  // Generate share ID (8 chars, URL-safe)
  const shareId = nanoid(8);

  // Add metadata
  const comparison: ComparisonResult = {
    version: 1,
    createdAt: new Date().toISOString(),
    user1: body.user1,
    user2: body.user2,
    compatibility: body.compatibility,
  };

  // Store in R2 and increment counter
  const key = `codiac/shares/${shareId}.json`;
  try {
    await env.R2.put(key, JSON.stringify(comparison), {
      httpMetadata: {
        contentType: 'application/json',
      },
    });
    // Increment the global counter
    await incrementCounter(env);
  } catch (error) {
    console.error('R2 put error:', error);
    return jsonResponse({ error: 'Failed to save comparison' }, 500, request, env);
  }

  return jsonResponse({
    id: shareId,
    url: `https://codiac.amditis.tech/?compare=${shareId}`,
  }, 201, request, env);
}

async function handleGetShare(shareId: string, request: Request, env: Env): Promise<Response> {
  // Validate share ID format (alphanumeric, 8 chars)
  if (!shareId || !/^[A-Za-z0-9_-]{8}$/.test(shareId)) {
    return jsonResponse({ error: 'Invalid share ID format' }, 400, request, env);
  }

  const key = `codiac/shares/${shareId}.json`;

  try {
    const object = await env.R2.get(key);

    if (!object) {
      return jsonResponse({ error: 'Comparison not found' }, 404, request, env);
    }

    const data = await object.json();
    return jsonResponse(data, 200, request, env);
  } catch (error) {
    console.error('R2 get error:', error);
    return jsonResponse({ error: 'Failed to retrieve comparison' }, 500, request, env);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: getCorsHeaders(request, env),
      });
    }

    // Route: POST /api/share
    if (path === '/api/share' && request.method === 'POST') {
      return handleShare(request, env);
    }

    // Route: GET /api/share/:id
    const shareMatch = path.match(/^\/api\/share\/([A-Za-z0-9_-]+)$/);
    if (shareMatch && request.method === 'GET') {
      return handleGetShare(shareMatch[1], request, env);
    }

    // Health check
    if (path === '/health') {
      return jsonResponse({ status: 'ok', timestamp: new Date().toISOString() }, 200, request, env);
    }

    // Counter endpoint
    if (path === '/api/stats' && request.method === 'GET') {
      const count = await getCounter(env);
      return jsonResponse({ count }, 200, request, env);
    }

    return jsonResponse({ error: 'Not found' }, 404, request, env);
  },
};
