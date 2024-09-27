import {Hono} from "hono";
import {registerApiV1GeoList} from "./geo-list";
import {registerApiV1SaveGeoId} from "./save-geo-id";

export const register = (app: Hono) => {
  registerApiV1GeoList(app);
  registerApiV1SaveGeoId(app);
}