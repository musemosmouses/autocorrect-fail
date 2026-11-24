import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line that reads as a funny autocorrect fail and nothing else.
// Intended text: "I haven't had my coffee yet, don't talk to me."
// Autocorrect slip: coffee -> coffin. Gate: 1-199 chars, single line, UTF-8.
// The program writes ONLY to MAKEFUN_OUTPUT_DIR (never to cwd, never rm).
const ENTRY = "I haven't had my coffin yet, don't talk to me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });

// Single output file, exactly the entry text, no trailing newline added:
// the gate counts characters, so the file holds the line and nothing else.
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
