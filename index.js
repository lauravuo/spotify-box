
const fs = require('fs')
const { getTopTracks } = require('./spotify')

async function main() {
  const tracksJson = await getTopTracks()
  fs.writeFileSync('./tracks.json', JSON.stringify(tracksJson))
  const data = tracksJson.items.map(item => ({
    artist: item.artists[0].name,
    name: item.name,
    url: item.external_urls.spotify,
    image: item.album.images[0].url
  } ))
  const md = "# Top Tracks"
  const mdWithData = data.reduce(
    (result, item) =>
      result+ `\n\n## [${item.artist}: ${item.name}](${item.url})\n![${item.artist}!](${item.image})`, md)
  fs.writeFileSync("./tracks.md", mdWithData)
}

;(async () => {
  await main()
})()
