import {geoIdMap} from "./geoIdMap";

export const getWeatherId = (geoId: string) => {
  for (const [weatherId, geoIds] of geoIdMap) {
    if (geoIds.includes(geoId)) {
      return weatherId;
    }
  }
  return "130000";
}
