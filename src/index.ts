import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {RouteHealthz} from "./routes/api/healthz";
import {RouteApiGeoList} from "./routes/api/geo-list";

const app = new Hono()

app.get('/api/healthz', RouteHealthz);
app.get('/api/geo-list', RouteApiGeoList);

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
