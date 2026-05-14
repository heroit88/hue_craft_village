import fs from "fs";
import path from "path";

const dir = "_crawl";
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".md"))) {
  const t = fs.readFileSync(path.join(dir, f), "utf8");
  const lines = t.split(/\r?\n/);
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("Website Huế Craft Village")) {
      break;
    }
    if (start === -1 && /^\d+\.\s/.test(lines[i])) {
      start = i;
    }
  }
  const body = start >= 0 ? lines.slice(start) : [];
  while (body.length && !body[0].trim()) body.shift();
  while (body.length && !body[body.length - 1].trim()) body.pop();
  const out = body.join("\n").replace(/!\[Image \d+\]\(https:[^\)]+\)\s*/g, "");
  console.log("===", f, "chars", out.length);
  console.log(out.slice(0, 1200));
  console.log("\n...\n");
}
