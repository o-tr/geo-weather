import type { ZIPInfoResponse } from "@/types/ipinfo";
import { GeoLocations } from "./location";

export const resolveGeoId = (data: ZIPInfoResponse) => {
  const { region, city } = data;
  const pref = GeoLocations[region];
  if (typeof pref === "string") {
    return pref;
  }
  if (pref) {
    const cityId = pref[city];
    if (cityId) {
      return cityId;
    }
    return pref.default;
  }
  return `loc:${data.loc}:${data.timezone}:${data.region}:${data.city}`;
};
