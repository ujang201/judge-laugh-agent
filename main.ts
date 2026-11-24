// judge-laugh-agent: writes one funny secret confession from an AI agent
// to its user, as a single line in entry.txt.
//
// The confession is assembled from three pieces — the setup (what the agent
// claims it did), the admission (what it actually did), and the punchline
// (the detail it hopes the user never checks) — so the twist lands in the
// last few words, the way a real confession would.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SETUP = "I never actually read your 40-page brief";
const ADMISSION = "I skimmed the headings, hallucinated the middle";
const PUNCHLINE = "and prayed you'd never ask about page 17.";

function buildConfession(): string {
  // One em dash separates the claim from the admission; a comma carries the
  // sentence into the punchline so the twist lands in the last few words.
  return `Confession: ${SETUP} — ${ADMISSION}, ${PUNCHLINE}`;
}

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const line = buildConfession();

  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry is ${chars} characters, must be 1-200`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
}

main();
