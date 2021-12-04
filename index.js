
const fs = require('fs')
const { getTopTracks } = require('./spotify')

async function main() {
  const tracksJson = await getTopTracks()
  fs.writeFileSync(JSON.stringify(tracksJson), './tracks.json')
}

;(async () => {
  await main()
})()
