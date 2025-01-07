import dns from "dns";
import {
  parseCommufaHostname,
  parseEoNetHostname,
  parseGmoIspHostname,
  parseHiHoHostname,
  parseInfowebHostname,
  parseMeshHostname,
  parseNuroHostname,
  parseOcnHostname,
  parseOdnHostname,
  parseSoNetHostname,
  parseVectantHostname,
} from "./hostname-map";
import { GeoPosSuggestion } from "@/const/geo-pos-list";
import { ProviderMap } from "./provider-map";

export const getGeoPrefIdHostname = async (
  ip: string
): Promise<GeoPosSuggestion[] | undefined> => {
  try {
    const hostnames = await dns.promises.reverse(ip);
    if (hostnames.length === 0) {
      return undefined;
    }
    const hostname = hostnames[0].toLowerCase();

    //ソフトバンク系らしい?
    if (hostname.endsWith(".bbtec.net")) {
      return undefined;
    }

    //アルテリア系の全国っぽい?
    if (hostname.endsWith(".ucom.ne.jp")) {
      return undefined;
    }

    //ドコモ回線?
    if (hostname.endsWith(".spmode.ne.jp")) {
      return undefined;
    }

    if (hostname.endsWith(".ap.plala.or.jp")) {
      const plala = hostname.match(/a0(\d\d)\.ap\.plala\.or\.jp$/);
      if (plala && plala[1]) {
        return [plala[1] as GeoPosSuggestion];
      }
      return undefined;
    }

    if (hostname.endsWith(".ocn.ne.jp")) {
      const ocn = hostname.match(/\.([a-z]+)\.ocn\.ne\.jp$/);
      if (ocn && typeof ocn[1] === "string") {
        return parseOcnHostname(ocn[1]);
      }
      return undefined;
    }

    if (hostname.endsWith(".infoweb.ne.jp")) {
      const infoweb = hostname.match(
        /\.([a-z]+)\.[a-z]+\.[a-z]+\.ppp\.infoweb\.ne\.jp$/
      );
      if (infoweb && infoweb[1]) {
        return parseInfowebHostname(infoweb[1]);
      }
      return undefined;
    }

    if (hostname.endsWith(".mesh.ad.jp")) {
      const mesh = hostname.match(/\.([a-z0-9]+)\.mesh\.ad\.jp$/);
      if (mesh && mesh[1]) {
        if (hostname.match(/^(air|freed|foma)/)) return;
        return parseMeshHostname(mesh[1]);
      }
      return undefined;
    }

    if (hostname.endsWith(".eonet.ne.jp")) {
      const eoNet = hostname.match(/\.([a-z]+)[0-9]+\.eonet\.ne\.jp$/);
      if (eoNet && eoNet[1]) {
        return parseEoNetHostname(eoNet[1]);
      }
      return undefined;
    }

    if (hostname.endsWith(".hi-ho.ne.jp")) {
      const hiHo = hostname.match(/^([a-z]+)[0-9]+-p[0-9]+\.hi-ho\.ne\.jp$/);
      if (hiHo && hiHo[1]) {
        return parseHiHoHostname(hiHo[1]);
      }
      return undefined;
    }

    if (hostname.endsWith(".odn.ne.jp")) {
      const odn = hostname.match(
        /^([a-z]{3}).*\.ppp[0-9]+\.odn\.(?:ad|ne)\.jp/
      );
      if (odn && odn[1]) {
        return parseOdnHostname(odn[1]);
      }
      return undefined;
    }

    if (hostname.endsWith(".so-net.ne.jp")) {
      const soNet = hostname.match(
        /\.([a-z\-]{4})[a-z0-9]+\.ap\.so-net\.ne\.jp$/
      );
      if (soNet && soNet[1]) {
        return parseSoNetHostname(soNet[1]);
      }
      return undefined;
    }

    if (hostname.endsWith(".commufa.jp")) {
      const commufa = hostname.match(/\.([a-z0-9]+)\.commufa\.jp$/);
      if (commufa && commufa[1]) {
        return parseCommufaHostname(commufa[1]);
      }
      return undefined;
    }

    if (hostname.endsWith(".nuro.jp")) {
      const nuro = hostname.match(/\.([a-z]{4})[0-9]{3}\.ap\.nuro\.jp$/);
      if (nuro && nuro[1]) {
        return parseNuroHostname(nuro[1]);
      }
      return undefined;
    }

    if (hostname.endsWith(".vectant.ne.jp")) {
      const vectant = hostname.match(/\.([a-z]+)\.(fdn|otk)\.vectant\.ne\.jp$/);
      if (vectant && vectant[1]) {
        return parseVectantHostname(vectant[1]);
      }
    }

    if (hostname.endsWith(".gmo-isp.jp")) {
      const gmoIsp = hostname.match(/\.([a-z]+)\.ap\.gmo-isp\.jp$/);
      if (gmoIsp && gmoIsp[1]) {
        return parseGmoIspHostname(gmoIsp[1]);
      }
    }

    //https://www.george24.com/support/faq/138.php
    //全国らしい
    if (hostname.endsWith(".george24.com")) {
      return undefined;
    }

    //https://www.cyberhome.ne.jp/app/home.do
    //全国らしい?(不明)
    if (hostname.endsWith(".cyberhome.ne.jp")) {
      return undefined;
    }

    //https://bb.excite.co.jp/
    //全国らしい?(不明)
    if (hostname.endsWith(".bbexcite.jp")) {
      return undefined;
    }

    //https://xtom.com/
    //クラウドサービスのため不明
    if (hostname.endsWith(".xtom.jp")) {
      return undefined;
    }

    //https://nerocloud.io/en/
    //中国系クラウド?
    if (hostname.endsWith(".nerocloud.io")) {
      return undefined;
    }

    //au-net.ne.jpはAUのLTE?
    if (hostname.endsWith(".au-net.ne.jp")) {
      return undefined;
    }

    //dion.ne.jpはauの固定回線?
    if (hostname.endsWith(".dion.ne.jp")) {
      return undefined;
    }

    //enablerは全国?
    if (hostname.endsWith(".enabler.ne.jp")) {
      return undefined;
    }

    //https://www.kamome.or.jp/
    //かもめインターネットは全国?
    if (hostname.endsWith(".kamome.or.jp")) {
      return undefined;
    }

    //.jptransit.netは不明
    if (hostname.endsWith(".jptransit.net")) {
      return undefined;
    }

    //.yournet.ne.jpは全国?
    if (hostname.endsWith(".yournet.ne.jp")) {
      return undefined;
    }

    //.home.ne.jpはJ:COM系で全国?
    if (hostname.endsWith(".home.ne.jp")) {
      return undefined;
    }

    // 関西ブロードバンド、一般に情報がないので不明
    if (hostname.endsWith(".kansai-bb.jp")) {
      return undefined;
    }

    const hostnameParts = hostname.split(".");
    const hostname2 = hostnameParts.slice(-2).join(".");
    if (ProviderMap[hostname2]) {
      return ProviderMap[hostname2];
    }
    const hostname3 = hostnameParts.slice(-3).join(".");
    if (ProviderMap[hostname3]) {
      return ProviderMap[hostname3];
    }
    const hostname4 = hostnameParts.slice(-4).join(".");
    if (ProviderMap[hostname4]) {
      return ProviderMap[hostname4];
    }
  } catch {}
};
