import {GeoLocations} from "./location";
import {ZIPInfoResponse} from "@/types/ipinfo";

export const resolveGeoId = (data: ZIPInfoResponse) => {
  const {region, city} = data;
  const pref = GeoLocations[region];
  if (typeof pref === 'string') {
    return pref;
  }
  if (pref){
    const cityId = pref[city];
    if (cityId) {
      return cityId;
    }
  }
  return `loc:${data.loc}:${data.timezone}:${data.region}:${data.city}`;
}

