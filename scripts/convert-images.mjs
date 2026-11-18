// scripts/convert-images.mjs
//
// Batch-convert the portfolio images in public/Pictures to optimized WebP.
//
// - DRY RUN by default: reports the real before/after size (it actually encodes
//   each image in memory to measure the true output size) but writes NOTHING.
// - Pass --write to actually write the .webp files to the output folder.
// - Originals are never modified or deleted — the script only reads them.
//
// Usage (from the project root, e:\aali):
//   node scripts/convert-images.mjs                 # dry run, full report
//   node scripts/convert-images.mjs --sample 40     # quick estimate on 40 images
//   node scripts/convert-images.mjs --write         # write .webp into the out dir
//   node scripts/convert-images.mjs --write --out public/Pictures-web
//
// Options:
//   --write              Actually write files (default is dry run).
//   --src <dir>          Source folder (default: public/Pictures).
//   --out <dir>          Output folder for --write (default: public/Pictures-web).
//   --max <px>           Max longest edge in pixels (default: 1920).
//   --quality <0-100>    WebP quality (default: 80).
//   --sample <n>         Only process the first N images (for a fast estimate).
//   --concurrency <n>    How many images to process at once (default: 8).

import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

// ---- parse args -----------------------------------------------------------
const args = process.argv.slice(2);
const getFlag = (name) => args.includes(`--${name}`);
const getOpt = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const WRITE = getFlag("write");
const SRC = path.resolve(getOpt("src", "public/Pictures"));
const OUT = path.resolve(getOpt("out", "public/Pictures-web"));
const MAX_EDGE = parseInt(getOpt("max", "1920"), 10);
const QUALITY = parseInt(getOpt("quality", "80"), 10);
const SAMPLE = parseInt(getOpt("sample", "0"), 10); // 0 = all
const CONCURRENCY = parseInt(getOpt("concurrency", "8"), 10);

const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

// ---- helpers --------------------------------------------------------------
const mb = (bytes) => (bytes / (1024 * 1024)).toFixed(1) + " MB";
const pct = (from, to) => (from ? (100 * (1 - to / from)).toFixed(1) + "%" : "—");

// Recursively collect image file paths under `dir`.
async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walk(full)));
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

// Process one image. Returns { category, inBytes, outBytes, skipped }.
async function processOne(file) {
  const rel = path.relative(SRC, file);
  const category = rel.split(path.sep)[0] || "(root)";
  const inBytes = (await fs.stat(file)).size;

  // Build the output path, swapping the extension for .webp.
  const outRel = rel.replace(/\.(jpe?g|png)$/i, ".webp");
  const outPath = path.join(OUT, outRel);

  // In write mode, skip if already converted (idempotent re-runs).
  if (WRITE) {
    try {
      const existing = await fs.stat(outPath);
      return { category, inBytes, outBytes: existing.size, skipped: true };
    } catch {
      /* not there yet — continue */
    }
  }

  const pipeline = sharp(file, { failOn: "none" }) // tolerate truncated/corrupt source files
    .rotate() // respect EXIF orientation
    .resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside", // keep aspect ratio, cap the longest edge
      withoutEnlargement: true, // never upscale smaller images
    })
    .webp({ quality: QUALITY });

  if (WRITE) {
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    const info = await pipeline.toFile(outPath);
    return { category, inBytes, outBytes: info.size, skipped: false };
  }

  // Dry run: encode in memory to measure the real output size, write nothing.
  const buffer = await pipeline.toBuffer();
  return { category, inBytes, outBytes: buffer.length, skipped: false };
}

// Simple concurrency pool.
async function runPool(items, worker, concurrency) {
  const results = new Array(items.length);
  let next = 0;
  let done = 0;
  const total = items.length;

  async function runner() {
    while (next < items.length) {
      const i = next++;
      try {
        results[i] = await worker(items[i]);
      } catch (err) {
        results[i] = { error: err.message, file: items[i] };
      }
      done++;
      if (done % 25 === 0 || done === total) {
        process.stdout.write(`\r  processed ${done}/${total} ...`);
      }
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, runner)
  );
  process.stdout.write("\n");
  return results;
}

// ---- main -----------------------------------------------------------------
async function main() {
  console.log("");
  console.log("Image conversion " + (WRITE ? "(WRITE MODE)" : "(DRY RUN — no files written)"));
  console.log("  source:   " + SRC);
  if (WRITE) console.log("  output:   " + OUT);
  console.log(`  settings: max ${MAX_EDGE}px, WebP quality ${QUALITY}`);
  console.log("");

  let files = await walk(SRC);
  if (!files.length) {
    console.error("No .jpg/.jpeg/.png files found under " + SRC);
    process.exit(1);
  }
  if (SAMPLE > 0) files = files.slice(0, SAMPLE);

  console.log(`Found ${files.length} image(s). Processing...`);
  const results = await runPool(files, processOne, CONCURRENCY);

  // ---- aggregate ----
  const byCategory = new Map();
  let totalIn = 0;
  let totalOut = 0;
  let errors = 0;
  let skipped = 0;

  for (const r of results) {
    if (!r || r.error) {
      errors++;
      if (r?.error) console.error(`  ! ${r.file}: ${r.error}`);
      continue;
    }
    totalIn += r.inBytes;
    totalOut += r.outBytes;
    if (r.skipped) skipped++;
    const c = byCategory.get(r.category) || { in: 0, out: 0, n: 0 };
    c.in += r.inBytes;
    c.out += r.outBytes;
    c.n += 1;
    byCategory.set(r.category, c);
  }

  console.log("");
  console.log("Per folder:");
  const cats = [...byCategory.entries()].sort((a, b) => b[1].in - a[1].in);
  for (const [name, c] of cats) {
    console.log(
      `  ${name.padEnd(28)} ${String(c.n).padStart(4)} imgs   ` +
        `${mb(c.in).padStart(10)} -> ${mb(c.out).padStart(9)}   saved ${pct(c.in, c.out)}`
    );
  }

  console.log("");
  console.log("TOTAL:");
  console.log(`  images:   ${files.length}` + (skipped ? ` (${skipped} already converted, skipped)` : ""));
  if (errors) console.log(`  errors:   ${errors}`);
  console.log(`  before:   ${mb(totalIn)}`);
  console.log(`  after:    ${mb(totalOut)}`);
  console.log(`  saved:    ${pct(totalIn, totalOut)}  (${mb(totalIn - totalOut)} smaller)`);
  console.log("");
  if (!WRITE) {
    console.log("This was a DRY RUN — nothing was written. Re-run with --write to generate the files.");
  } else {
    console.log("Done. WebP files written to: " + OUT);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
