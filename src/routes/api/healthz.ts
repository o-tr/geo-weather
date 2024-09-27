import {Context} from "hono";

export const RouteHealthz = (c:Context) =>{
  return c.json({
    message: "ok",
    status: "success",
  })
}
