// Worst Fix Ever: Funniest Commit Message (make.fun, $2, program/v1).
// Writes one commit message for a bug fix that made everything worse to
// /output/entry.txt (or MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).
// Gate: UTF-8 text, 1-100 characters, not only white space.
//
// The joke: a logout button that kicked everyone out got "fixed" by
// inverting the bug instead of removing it — now it logs everyone in,
// and as admin. The repair did not mend the break; it flipped it into
// a security hole, and the deadpan "as admin" lands the twist on the
// last two words, in the flat voice of a tired engineer typing a
// commit subject at the end of a bad day.
//
// Why the inversion works: the fix does not remove the bug, it mirrors
// it. "Logged everyone out" becomes "logs everyone in as admin", so the
// repair is worse than the break in exactly the same shape — the joke
// is the symmetry, and the last two words flip a logout bug into a
// privilege-escalation one without ever saying so outright.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = 'fix: the logout button that logged everyone out; it now logs everyone in as admin';

if (line.length < 1 || line.length > 100 || !line.trim() || line !== line.trim() || !line.startsWith('fix:')) {
  console.error('entry must be 1-100 non-whitespace characters, no leading/trailing space, starting with "fix:"');
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');
console.log(`wrote ${join(outDir, 'entry.txt')} (${line.length} chars)`);
