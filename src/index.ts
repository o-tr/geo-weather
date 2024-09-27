import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {RouteHealthz} from "./routes/api/healthz";
import {RouteApiGeoList} from "./routes/api/v1/geo-list";
import {serveStatic} from "@hono/node-server/serve-static";

const app = new Hono()

app.get('/*',serveStatic({root:"./public/",index:"index.html"}))
app.get('/static/*',serveStatic({root:"./public/",index:"index.html"}))

app.get('/api/healthz', RouteHealthz);
app.get('/api/v1/geo-list', RouteApiGeoList);

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
