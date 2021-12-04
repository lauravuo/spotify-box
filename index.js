
const fs = require('fs')
const { getTopTracks } = require('./spotify')

async function main() {
  const tracksJson = await getTopTracks()
  fs.writeFileSync('./tracks.json', JSON.stringify(tracksJson))
}

;(async () => {
  await main()
})()
