import dns from "node:dns";
import type { GeoPosSuggestion } from "@/const/geo-pos-list";
import { HostnameParserMap } from "./hostname-map";
import { IgnoreIsps } from "./ignore-isp";
import { ProviderMap } from "./provider-map";

export const getGeoPrefIdHostname = async (
  ip: string,
): Promise<{
  suggestions?: GeoPosSuggestion[];
  hostname?: string;
}> => {
  try {
    const hostnames = await dns.promises.reverse(ip);
    if (hostnames.length === 0) {
      return {
        hostname: undefined,
        suggestions: undefined,
      };
    }
    const hostname = hostnames[0].toLowerCase();

    const hostnameParts = hostname.split(".");
    const hostname2 = hostnameParts.slice(-2).join(".");
    if (IgnoreIsps.includes(hostname2)) {
      return {
        suggestions: undefined,
        hostname,
      };
    }
    if (ProviderMap[hostname2]) {
      return {
        suggestions: ProviderMap[hostname2],
        hostname,
      };
    }
    if (HostnameParserMap[hostname2]) {
      const suggestions = HostnameParserMap[hostname2](hostname);
      return {
        suggestions,
        hostname,
      };
    }
    const hostname3 = hostnameParts.slice(-3).join(".");
    if (IgnoreIsps.includes(hostname3)) {
      return {
        suggestions: undefined,
        hostname,
      };
    }
    if (ProviderMap[hostname3]) {
      return {
        suggestions: ProviderMap[hostname3],
        hostname,
      };
    }
    if (HostnameParserMap[hostname3]) {
      const suggestions = HostnameParserMap[hostname3](hostname);
      return {
        suggestions,
        hostname,
      };
    }
  } catch {}
  return {
    suggestions: undefined,
    hostname: undefined,
  };
};
