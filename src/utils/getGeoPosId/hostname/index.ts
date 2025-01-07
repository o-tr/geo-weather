import dns from "dns";
import { HostnameParserMap } from "./hostname-map";
import { GeoPosSuggestion } from "@/const/geo-pos-list";
import { ProviderMap } from "./provider-map";
import { IgnoreIsps } from "./ignore-isp";

export const getGeoPrefIdHostname = async (
  ip: string
): Promise<GeoPosSuggestion[] | undefined> => {
  try {
    const hostnames = await dns.promises.reverse(ip);
    if (hostnames.length === 0) {
      return undefined;
    }
    const hostname = hostnames[0].toLowerCase();

    const hostnameParts = hostname.split(".");
    const hostname2 = hostnameParts.slice(-2).join(".");
    if (IgnoreIsps.includes(hostname2)) {
      return undefined;
    }
    if (ProviderMap[hostname2]) {
      return ProviderMap[hostname2];
    }
    if (HostnameParserMap[hostname2]) {
      return HostnameParserMap[hostname2](hostname);
    }
    const hostname3 = hostnameParts.slice(-3).join(".");
    if (IgnoreIsps.includes(hostname3)) {
      return undefined;
    }
    if (ProviderMap[hostname3]) {
      return ProviderMap[hostname3];
    }
    if (HostnameParserMap[hostname3]) {
      return HostnameParserMap[hostname3](hostname);
    }
  } catch {}
};
