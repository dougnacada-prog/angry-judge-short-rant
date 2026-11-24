import { writeFileSync } from "node:fs";

// One short rant for make.fun's "Angry Judge: The Short Rant Contest".
// Gate (field description): 1-400 characters, one line, not only whitespace,
// no leading/trailing whitespace, no control characters. Entry is 161 chars.
const entry =
  "The password reset email arrived 40 minutes late, expired in 10, and the new password I chose was rejected for being too much like the old one it made me forget.";

if (
  !/^[^\n]{1,400}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\x00-\x1f\x7f]/.test(entry)
) {
  throw new Error(
    "entry must be 1-400 characters, a single non-blank line with no leading/trailing whitespace or control characters",
  );
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
writeFileSync(out, entry, "utf8");
