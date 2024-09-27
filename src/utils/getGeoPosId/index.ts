import {Context} from "hono";
import {geoPosIds} from "@/const/geo-pos-list";
import {geoGeoPosIdUser} from "./user";
import {getGeoPrefIdHostname} from "./hostname";
import {getGeoPosIdIPInfo} from "./ipinfo";
import {defaultGeoPos} from "./default-geo-pos";

export const getGeoPosId = async (ip: string, c: Context) => {
  const queryId = c.req.queries("geoPosId")?.[0];
  if (queryId && geoPosIds.includes(queryId)) {
    return {
      source: "query",
      geoId: queryId,
    };
  }

  try{
    const geoPosId = await geoGeoPosIdUser(ip);
    console.log(`ip: ${ip}, prefId: none, geoPosId: ${geoPosId}, source: user`);
    return {
      source: "user",
      geoId: geoPosId
    };
  }catch{}

  const prefId = await getGeoPrefIdHostname(ip);
  try {
    const geoPosId = await getGeoPosIdIPInfo(ip);
    if (!prefId || geoPosId.startsWith(prefId)){
      console.log(`ip: ${ip}, prefId: ${prefId}, geoPosId: ${geoPosId}, source: ipinfo`)
      return {
        source: "ipinfo",
        geoId: geoPosId
      };
    }
  }catch{}

  if (prefId) {
    console.log(`ip: ${ip}, prefId: ${prefId}, geoPosId: ${defaultGeoPos[prefId]}, source: hostname`)
    return {
      source: "hostname",
      geoId: defaultGeoPos[prefId]
    };
  }

  console.log(`ip: ${ip}, prefId: ${prefId}, geoPosId: none, source: fallback`)
  return {
    source: "fallback",
    geoId: "130010"
  };
}