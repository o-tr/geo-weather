import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import {serveStatic} from "@hono/node-server/serve-static";
import {registerApi} from "@/routes/api";

const app = new Hono()

app.get('/*',serveStatic({root:"./public/",index:"index.html"}))
app.get('/static/*',serveStatic({root:"./public/",index:"index.html"}))

registerApi(app);

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
