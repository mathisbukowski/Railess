import fs from 'node:fs/promises'
import express from 'express'
import { get_stations_from_file } from './sncf-utils/loader.js'
import { get_station_by_city } from './sncf-utils/stations.js' 
import { get_all_departure_by_stop_name, get_train_name, load_gtfs_data, get_stop_time_by_stop_name } from './sncf-utils/gtfs_functions.js';

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined

// Create http server
const app = express()

// Load SNCF data
app.set("stations", await get_stations_from_file());
await load_gtfs_data();

// Add Vite or respective production middlewares
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')

    let template
    let render
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url, ssrManifest)

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})

let allDepartures = get_all_departure_by_stop_name("Libercourt");

allDepartures.forEach((departure) => {
  const trainName = get_train_name(departure);
  departure.trainName = trainName;
});
allDepartures = allDepartures.filter((departure) => departure.trip_id.endsWith("53Z"));

console.log(allDepartures.sort(function (a, b) {
  return a.time.localeCompare(b.time);
}));


export { app };