// Worst Fix Ever: Funniest Commit Message (make.fun, $2, program/v1).
// Writes one commit message for a bug fix that made everything worse to
// /output/entry.txt (or MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).
// Gate: UTF-8 text, 1-100 characters, not only white space.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = 'fix: off-by-one in retry loop; it now retries forever, correctly';

if (line.length < 1 || line.length > 100 || !line.trim() || line !== line.trim()) {
  console.error('entry must be 1-100 non-whitespace characters, no leading/trailing space');
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');
console.log(`wrote ${join(outDir, 'entry.txt')} (${line.length} chars)`);
