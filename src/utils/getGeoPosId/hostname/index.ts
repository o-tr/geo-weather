import dns from "dns";
import {
  CommufaHostnamePrefMap,
  EoNetHostnamePrefMap, HiHoHostnamePrefMap,
  InfowebHostnamePrefMap,
  MeshHostnamePrefMap, NuroHostnamePrefMap,
  OcnHostnamePrefMap, OdnHostnamePrefMap, SoNetHostnamePrefMap
} from "./hostname-map";


export const getGeoPrefIdHostname = async(ip: string):Promise<string|undefined> => {
  try{
    const hostnames = await dns.promises.reverse(ip);
    if (hostnames.length === 0) {
      throw new Error("No hostname");
    }
    const hostname = hostnames[0].toLowerCase();
    const plala = hostname.match(/a0(\d\d)\.ap\.plala\.or\.jp$/);
    if (plala && plala[1]) {
      return plala[1];
    }

    const ocn = hostname.match(/\.([a-z]+)\.ocn\.ne\.jp$/);
    if (ocn && typeof ocn[1] === "string") {
      return OcnHostnamePrefMap[ocn[1]];
    }

    const infoweb = hostname.match(/\.([a-z]+)\.[a-z]+\.[a-z]+\.ppp\.infoweb\.ne\.jp$/)
    if (infoweb && infoweb[1]) {
      return InfowebHostnamePrefMap[infoweb[1]];
    }

    const mesh = hostname.match(/\.([a-z0-9]+)\.mesh\.ad\.jp$/)
    if (mesh && mesh[1]) {
      if (hostname.match(/^(air|freed|foma)/)) return;
      return MeshHostnamePrefMap[mesh[1]];
    }

    const eoNet = hostname.match(/\.([a-z0-9]+)\.eonet\.ne\.jp$/);
    if (eoNet && eoNet[1]) {
      return EoNetHostnamePrefMap[eoNet[1]];
    }

    const hiHo = hostname.match(/^([a-z]+)[0-9]+-p[0-9]+\.hi-ho\.ne\.jp$/);
    if (hiHo && hiHo[1]) {
      return HiHoHostnamePrefMap[hiHo[1]];
    }

    const odn = hostname.match(/^([a-z]{3}).*\.ppp[0-9]+\.odn\.(?:ad|ne)\.jp/);
    if (odn && odn[1]) {
      return OdnHostnamePrefMap[odn[1]];
    }
    //todo so-netから https://wiki.dead.jp/?%E3%83%97%E3%83%AD%E3%83%90%E3%82%A4%E3%83%80%E3%81%AE%E9%80%86%E5%BC%95%E3%81%8D%E3%83%9B%E3%82%B9%E3%83%88
    const soNet = hostname.match(/\.([a-z\-]{4})[a-z0-9]+\.ap\.so-net\.ne\.jp$/)
    if (soNet && soNet[1]) {
      return SoNetHostnamePrefMap[soNet[1]];
    }

    const commufa = hostname.match(/\.([a-z0-9]+)\.commufa\.jp$/)
    if (commufa && commufa[1]) {
      return CommufaHostnamePrefMap[commufa[1]];
    }

    const nuro = hostname.match(/\.([a-z]{4})[0-9]{3}\.ap\.nuro\.jp$/)
    if (nuro && nuro[1]) {
      return NuroHostnamePrefMap[nuro[1]];
    }
  }catch{}
}
