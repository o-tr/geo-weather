import {Context, Hono} from "hono";
import {geoPosData} from "@/const/geo-pos-list";

export const registerApiV1GeoList = (app: Hono) => {
  app.get("/api/v1/geo-list", (c:Context) =>{
    return c.json({
      data: geoPosData,
      status: "success",
    })
  });
}
