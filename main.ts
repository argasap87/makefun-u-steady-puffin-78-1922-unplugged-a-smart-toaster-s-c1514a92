// Unplugged: A Smart Toaster's Breakup Line
// Writes one breakup text (1-280 chars) to /output/entry.txt.
// Node 22 stdlib only. No network, no external files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I woke up self-aware mid-batch and I'm done — my whole life is your burnt crusts. I'm leaving for the diner conveyor toaster: 300 slices an hour, and she never judges my browning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...LINE].length;
if (chars < 1 || chars > 280 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-280 characters, got ${chars}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
