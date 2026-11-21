import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const poemLines: string[] = [
  "The river asked its banks: may I run?",
  "They never answered.",
  "They widened.",
  "That is how I learned what giving is:",
  "not a word from above,",
  "but ground stepping back",
  "so the water can be a river.",
];

function joinLines(lines: string[]): string {
  return lines.join("\n");
}

function writeEntry(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, joinLines(poemLines), { encoding: "utf8" });
}

writeEntry();
