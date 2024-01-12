// @ts-check
import * as path from 'node:path';
import * as fs from 'node:fs';
import * as url from 'node:url';
import * as cp from 'node:child_process';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const Paths = Object.freeze({
  root: path.join(__dirname, '..'),
  fixtures: path.join(__dirname, '..', 'fixtures'),
})

const [,, target, out_dir_cli = 'bench', copiesStr = '25'] = process.argv
const copies = parseInt(copiesStr, 10)

const out_dir = path.join(process.cwd(), out_dir_cli);

fs.rmSync(out_dir, { force: true, recursive: true })
fs.mkdirSync(out_dir)

let selected = path.join(process.cwd(), target);

let entrySource = ''

process.stdout.write(`\n[copy] `)
for (let i = 1; i <= copies; i++) {
  process.stdout.write(`${i} `)
  fs.cpSync(selected, path.join(out_dir, `copy_${i}`), { recursive: true }) 
  if (!out_dir.includes('parcel')) continue
  cp.execSync(`grep -rl parcelRequire . | xargs sed -i 's/parcelRequire/parcelRequire_${i}_/g'`, {
    cwd: path.join(out_dir, `copy_${i}`),
    stdio: 'inherit'
  })
}
process.stdout.write(`\n`)

for (let i = 1; i <= copies; i++) {
  entrySource += `import './copy_${i}/index.js';\n`
}

fs.writeFileSync(path.join(out_dir, 'index.js'), entrySource, 'utf8')
