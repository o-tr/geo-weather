import dns from "node:dns";
import type { GeoPosSuggestion } from "@/const/geo-pos-list";
import { HostnameParserMap } from "./hostname-map";
import { IgnoreIsps } from "./ignore-isp";
import { ProviderMap, ProviderInfoByDomain } from "./provider-map";
import type { ProviderInfo } from "./types";

export const getGeoPrefIdHostname = async (
  ip: string,
): Promise<{
  suggestions?: GeoPosSuggestion[];
  hostname?: string;
  providerInfo?: ProviderInfo;
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
        providerInfo: ProviderInfoByDomain[hostname2],
      };
    }
    if (HostnameParserMap[hostname2]) {
      const parserInfo = HostnameParserMap[hostname2];
      const suggestions = parserInfo.parser(hostname);
      return {
        suggestions,
        hostname,
        providerInfo: {
          name: parserInfo.name,
          domains: [parserInfo.domain],
          geoIds: suggestions || [],
          description: parserInfo.description,
        },
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
        providerInfo: ProviderInfoByDomain[hostname3],
      };
    }
    if (HostnameParserMap[hostname3]) {
      const parserInfo = HostnameParserMap[hostname3];
      const suggestions = parserInfo.parser(hostname);
      return {
        suggestions,
        hostname,
        providerInfo: {
          name: parserInfo.name,
          domains: [parserInfo.domain],
          geoIds: suggestions || [],
          description: parserInfo.description,
        },
      };
    }
  } catch {}
  return {
    suggestions: undefined,
    hostname: undefined,
  };
};
