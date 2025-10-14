import type { Context } from "hono";
import { geoPosIds } from "@/const/geo-pos-list";
import { defaultGeoPos } from "./default-geo-pos";
import { getGeoPrefIdHostname } from "./hostname";
import { getGeoPosIdIPInfo } from "./ipinfo";
import { geoGeoPosIdCached } from "./user";

export const getGeoPosId = async (ip: string, c: Context) => {
  const queryId = c.req.queries("geoPosId")?.[0];
  if (queryId && geoPosIds.includes(queryId)) {
    console.log(
      JSON.stringify({
        date: Date.now(),
        ip,
        prefId: "none",
        geoPosId: queryId,
        source: "query",
      }),
    );
    return {
      source: "query",
      geoId: queryId,
    };
  }

  try {
    const { geoId, source } = await geoGeoPosIdCached(ip);
    console.log(
      JSON.stringify({
        date: Date.now(),
        ip,
        prefId: "none",
        geoId,
        source: source,
      }),
    );
    return {
      source: source,
      geoId: geoId,
    };
  } catch {}

  const prefId = await getGeoPrefIdHostname(ip);
  try {
    const geoPosId = await getGeoPosIdIPInfo(ip);
    if (!prefId || prefId.some((v) => geoPosId?.startsWith(v))) {
      console.log(
        JSON.stringify({
          date: Date.now(),
          ip,
          prefId: prefId ?? "none",
          geoPosId,
          source: "ipinfo",
        }),
      );
      return {
        source: "ipinfo",
        geoId: geoPosId,
      };
    }
  } catch (e) {
    console.log(e);
  }

  if (prefId?.[0]) {
    console.log(
      JSON.stringify({
        date: Date.now(),
        ip,
        prefId,
        geoPosId: defaultGeoPos[prefId[0]],
        source: "hostname",
      }),
    );
    if (prefId[0].length === 6) {
      return {
        source: "hostname",
        geoId: prefId[0],
      };
    }
    return {
      source: "hostname",
      geoId: defaultGeoPos[prefId[0]],
    };
  }

  console.log(
    JSON.stringify({
      date: Date.now(),
      ip,
      prefId: "none",
      geoPosId: "130010",
      source: "fallback",
    }),
  );
  return {
    source: "fallback",
    geoId: "130010",
  };
};
