import {Hono} from "hono";
import {registerApiV1GeoList} from "./geo-list";
import {registerApiV1SaveGeoId} from "./save-geo-id";

export const registerApiV1 = (app: Hono) => {
  registerApiV1GeoList(app);
  registerApiV1SaveGeoId(app);
}