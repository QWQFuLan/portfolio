// 把 dist/output_resource/assets 合并进 dist/output/assets，让 dist/output 成为可整体部署的静态目录
const fs = require('fs');
const path = require('path');

const src = path.join('dist', 'output_resource', 'assets');
const dest = path.join('dist', 'output', 'assets');

if (!fs.existsSync(src)) {
  console.warn(`[merge-output] 找不到 ${src}，跳过`);
  process.exit(0);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
console.log(`[merge-output] assets 已合并到 ${dest}`);
