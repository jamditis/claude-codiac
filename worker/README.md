# Codiac Share Worker

Cloudflare Worker for sharing Claude Codiac comparison results.

## Endpoints

- **POST /api/share** - Save comparison result, returns share ID
- **GET /api/share/:id** - Retrieve comparison by ID
- **GET /health** - Health check

## Deployment

```bash
cd ~/projects/insights-compare/worker

# First time: login to Cloudflare
npx wrangler login

# Deploy
npm run deploy
```

After deployment, add a custom route in the Cloudflare dashboard:
- Route: `codiac-api.amditis.tech/*`
- Worker: `codiac-share`

Or update wrangler.toml with:
```toml
routes = [
  { pattern = "codiac-api.amditis.tech/*", zone_name = "amditis.tech" }
]
```

## Local Development

```bash
npm run dev
```

## Testing

### Create a share
```bash
curl -X POST https://codiac-api.amditis.tech/api/share \
  -H "Content-Type: application/json" \
  -d '{
    "user1": {
      "mascot": "hawk",
      "name": "The Commander",
      "emoji": "🦅",
      "stats": {
        "messages": 30652,
        "msgsPerDay": 1915.8,
        "linesAdded": 2756864,
        "responseTimeMedian": 46.9,
        "multiClaudingPercent": 1,
        "languageCount": 6,
        "topLanguages": ["Python", "TypeScript", "JavaScript"]
      }
    },
    "user2": {
      "mascot": "owl",
      "name": "The Night Owl",
      "emoji": "🦉",
      "stats": {
        "messages": 15420,
        "msgsPerDay": 856.7,
        "linesAdded": 1234567,
        "responseTimeMedian": 32.1,
        "multiClaudingPercent": 3,
        "languageCount": 4,
        "topLanguages": ["Rust", "Go", "Python"]
      }
    },
    "compatibility": {
      "score": 73,
      "verdict": "You two would crush a hackathon together.",
      "sameEnergy": ["Both TypeScript people", "Both work evenings"],
      "plotTwists": ["You use 3x more bash", "They read more first"]
    }
  }'
```

### Retrieve a share
```bash
curl https://codiac-api.amditis.tech/api/share/ABC12345
```

### Health check
```bash
curl https://codiac-api.amditis.tech/health
```

## Local testing

```bash
# Start local dev server
npm run dev

# Test locally
curl -X POST http://localhost:8787/api/share \
  -H "Content-Type: application/json" \
  -d '{"user1":{"mascot":"hawk","name":"Test","emoji":"🦅","stats":{"messages":100,"msgsPerDay":10,"linesAdded":1000,"responseTimeMedian":50,"multiClaudingPercent":1,"languageCount":3,"topLanguages":["Python"]}},"user2":{"mascot":"owl","name":"Test2","emoji":"🦉","stats":{"messages":200,"msgsPerDay":20,"linesAdded":2000,"responseTimeMedian":40,"multiClaudingPercent":2,"languageCount":4,"topLanguages":["Rust"]}},"compatibility":{"score":75,"verdict":"Great match!","sameEnergy":["Both coders"],"plotTwists":["Different languages"]}}'
```
