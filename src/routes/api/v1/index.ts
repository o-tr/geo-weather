import {Hono} from "hono";
import {registerApiV1GeoList} from "./geo-list";
import {registerApiV1SaveGeoId} from "./save-geo-id";
import {registerApiV1UserPreferences} from "./user-preferences";
import {registerApiV1Translations} from "./translations";

export const registerApiV1 = (app: Hono) => {
  registerApiV1GeoList(app);
  registerApiV1SaveGeoId(app);
  registerApiV1UserPreferences(app);
  registerApiV1Translations(app);
}
