import fs from "fs";
import path from "path";

const dir = "_crawl";
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".md"))) {
  const t = fs.readFileSync(path.join(dir, f), "utf8");
  const all = t.match(/https:\/\/lh3\.googleusercontent\.com\/sitesv\/[^)\s]+/g) || [];
  const seen = new Set();
  const urls = [];
  for (const u of all) {
    if (!seen.has(u)) {
      seen.add(u);
      urls.push(u);
    }
  }
  const gallery = urls.filter((u) => !u.includes("w16383"));
  console.log(f, gallery.length);
  console.log(JSON.stringify(gallery, null, 0));
  console.log("---");
}
