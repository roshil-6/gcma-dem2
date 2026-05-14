const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '..', '.next')
try {
  fs.rmSync(dir, { recursive: true, force: true })
  process.stdout.write('Removed .next\n')
} catch (err) {
  process.stderr.write(String(err) + '\n')
  process.exit(1)
}
