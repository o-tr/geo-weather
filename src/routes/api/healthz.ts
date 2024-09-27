import {Context} from "hono";

export const RouteHealthz = (c:Context) =>{
  return c.text('ok')
}
