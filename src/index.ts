import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {RouteHealthz} from "./routes/healthz";

const app = new Hono()

app.get('/healthz', RouteHealthz);

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
