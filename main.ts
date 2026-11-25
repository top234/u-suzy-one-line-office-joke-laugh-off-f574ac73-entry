import fs from "node:fs";
import path from "node:path";

// Why this punchline works: the word "second" does double duty.
// The setup asks IT for a second monitor (hardware); the punchline
// hands back a second job instead (workload) — same word, opposite gift.
// No meeting/email/printer/coffee/Monday cliche, instantly clear.
const JOKE = "I asked IT for a second monitor and they gave me a second job.";

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Joke must be a single line");
}
if (JOKE !== JOKE.trim()) {
  throw new Error("Joke must not have leading or trailing whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote entry.txt (${JOKE.length} characters)`);
