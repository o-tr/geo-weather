import {Context} from "hono";
import {geoPosData} from "../../../const/geo-pos-list";

export const RouteApiGeoList = (c:Context) =>{
  return c.json({
    data: geoPosData,
    status: "success",
  })
}
