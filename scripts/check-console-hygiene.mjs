import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const allowedConsoleLines = [
  'if (debugLogsEnabled) console.debug(...args);',
  'if (debugLogsEnabled) console.error(...args);',
];

const violations = html
  .split('\n')
  .map((line, index) => ({ line, number: index + 1 }))
  .filter(({ line }) => line.includes('console.'))
  .filter(({ line }) => !allowedConsoleLines.some(allowed => line.trim() === allowed));

if (violations.length > 0) {
  console.error('Unexpected production console calls found:');
  for (const violation of violations) {
    console.error(`${violation.number}: ${violation.line.trim()}`);
  }
  process.exit(1);
}

console.log('Console hygiene check passed.');
