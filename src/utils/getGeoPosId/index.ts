import type { Context } from "hono";
import { geoPosIds } from "@/const/geo-pos-list";
import { defaultGeoPos } from "./default-geo-pos";
import { getGeoPrefIdHostname } from "./hostname";
import { getGeoPosIdIPInfo } from "./ipinfo";
import { geoGeoPosIdCached } from "./user";

const log = (data: {
  ip: string;
  suggestions: string[] | undefined;
  geoId: string;
  source: string;
  hostname: string | undefined;
}) => {
  console.log(
    JSON.stringify({
      date: Date.now(),
      ip: data.ip,
      suggestions: data.suggestions,
      geoId: data.geoId,
      source: data.source,
      hostname: data.hostname,
    }),
  );
};

export const getGeoPosId = async (
  ip: string,
  c: Context,
): Promise<{
  source: string;
  geoId: string;
  hostname: string | undefined;
}> => {
  const queryId = c.req.queries("geoPosId")?.[0];
  if (queryId && geoPosIds.includes(queryId)) {
    log({
      ip,
      suggestions: undefined,
      geoId: queryId,
      hostname: undefined,
      source: "query",
    });
    return {
      source: "query",
      geoId: queryId,
      hostname: undefined,
    };
  }

  try {
    const { geoId, source } = await geoGeoPosIdCached(ip);
    log({
      ip,
      suggestions: undefined,
      geoId,
      hostname: undefined,
      source,
    });
    return {
      source: source,
      geoId: geoId,
      hostname: undefined,
    };
  } catch {}

  const [{ suggestions, hostname }, geoPosId] = await Promise.all([
    getGeoPrefIdHostname(ip),
    getGeoPosIdIPInfo(ip).catch(() => undefined),
  ]);

  if (suggestions?.length === 1 && suggestions[0].length === 6) {
    log({
      ip,
      suggestions,
      geoId: suggestions[0],
      hostname,
      source: "hostname",
    });
    return {
      source: "hostname",
      geoId: suggestions[0],
      hostname,
    };
  }

  if (
    (!suggestions || suggestions.some((v) => geoPosId?.startsWith(v))) &&
    geoPosId
  ) {
    log({
      ip,
      suggestions,
      geoId: geoPosId,
      hostname,
      source: "ipinfo",
    });
    return {
      source: "ipinfo",
      geoId: geoPosId,
      hostname,
    };
  }

  if (suggestions?.[0]) {
    log({
      ip,
      suggestions,
      geoId: defaultGeoPos[suggestions[0]],
      hostname,
      source: "hostname",
    });
    if (suggestions[0].length === 6) {
      return {
        source: "hostname",
        geoId: suggestions[0],
        hostname,
      };
    }
    return {
      source: "hostname",
      geoId: defaultGeoPos[suggestions[0]],
      hostname,
    };
  }

  log({
    ip,
    suggestions: undefined,
    geoId: "130010",
    hostname: undefined,
    source: "fallback",
  });
  return {
    source: "fallback",
    geoId: "130010",
    hostname,
  };
};
