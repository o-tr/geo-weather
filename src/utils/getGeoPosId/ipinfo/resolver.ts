import {GeoLocations} from "./location";

export const resolveGeoId = (prefecture: string, city: string) => {
  const pref = GeoLocations[prefecture];
  if (typeof pref === 'string') {
    return pref;
  }
  const cityId = pref[city];
  if (cityId) {
    return cityId;
  }
  throw new Error(`Unknown city: ${prefecture} ${city}`);
}

