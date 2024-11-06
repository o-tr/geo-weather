import dns from "dns";
import {
  CommufaHostnamePrefMap,
  EoNetHostnamePrefMap, HiHoHostnamePrefMap,
  InfowebHostnamePrefMap,
  MeshHostnamePrefMap, NuroHostnamePrefMap,
  OcnHostnamePrefMap, OdnHostnamePrefMap, SoNetHostnamePrefMap, VectantHostnamePrefMap
} from "./hostname-map";


export const getGeoPrefIdHostname = async(ip: string):Promise<string[]|undefined> => {
  try{
    const hostnames = await dns.promises.reverse(ip);
    if (hostnames.length === 0) {
      return undefined;
    }
    const hostname = hostnames[0].toLowerCase();

    //ソフトバンク系らしい?
    if (hostname.endsWith(".bbtec.net")){
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
        return [plala[1]];
      }
      return undefined;
    }

    if (hostname.endsWith(".ocn.ne.jp")) {
      const ocn = hostname.match(/\.([a-z]+)\.ocn\.ne\.jp$/);
      if (ocn && typeof ocn[1] === "string") {
        return [OcnHostnamePrefMap[ocn[1]]];
      }
      return undefined;
    }

    if (hostname.endsWith(".infoweb.ne.jp")) {
      const infoweb = hostname.match(/\.([a-z]+)\.[a-z]+\.[a-z]+\.ppp\.infoweb\.ne\.jp$/)
      if (infoweb && infoweb[1]) {
        return [InfowebHostnamePrefMap[infoweb[1]]];
      }
      return undefined;
    }

    if (hostname.endsWith(".mesh.ad.jp")) {
      const mesh = hostname.match(/\.([a-z0-9]+)\.mesh\.ad\.jp$/)
      if (mesh && mesh[1]) {
        if (hostname.match(/^(air|freed|foma)/)) return;
        return [MeshHostnamePrefMap[mesh[1]]];
      }
      return undefined;
    }

    if (hostname.endsWith(".eonet.ne.jp")) {
      const eoNet = hostname.match(/\.([a-z]+)[0-9]+\.eonet\.ne\.jp$/);
      if (eoNet && eoNet[1]) {
        return [EoNetHostnamePrefMap[eoNet[1]]];
      }
      return undefined;
    }

    if (hostname.endsWith(".hi-ho.ne.jp")) {
      const hiHo = hostname.match(/^([a-z]+)[0-9]+-p[0-9]+\.hi-ho\.ne\.jp$/);
      if (hiHo && hiHo[1]) {
        return [HiHoHostnamePrefMap[hiHo[1]]];
      }
      return undefined;
    }

    if (hostname.endsWith(".odn.ne.jp")) {
      const odn = hostname.match(/^([a-z]{3}).*\.ppp[0-9]+\.odn\.(?:ad|ne)\.jp/);
      if (odn && odn[1]) {
        return [OdnHostnamePrefMap[odn[1]]];
      }
      return undefined;
    }

    if (hostname.endsWith(".so-net.ne.jp")) {
      const soNet = hostname.match(/\.([a-z\-]{4})[a-z0-9]+\.ap\.so-net\.ne\.jp$/)
      if (soNet && soNet[1]) {
        return [SoNetHostnamePrefMap[soNet[1]]];
      }
      return undefined;
    }

    if (hostname.endsWith(".commufa.jp")) {
      const commufa = hostname.match(/\.([a-z0-9]+)\.commufa\.jp$/)
      if (commufa && commufa[1]) {
        return [CommufaHostnamePrefMap[commufa[1]]];
      }
      return undefined;
    }

    if (hostname.endsWith(".nuro.jp")) {
      const nuro = hostname.match(/\.([a-z]{4})[0-9]{3}\.ap\.nuro\.jp$/)
      if (nuro && nuro[1]) {
        return [NuroHostnamePrefMap[nuro[1]]];
      }
      return undefined;
    }

    //https://www.catv-jcta.jp/search/detail/10110281
    //https://www.kanazawacable.jp/join/area/
    //金沢ケーブルは石川県のみ
    if (hostname.endsWith(".kanazawacable.jp")) {
      return ["17"];
    }

    //https://www.megaegg.jp/area/megaegg/?svc=1
    //メガエッグは中国地方のみ
    if (hostname.endsWith(".megaegg.ne.jp")) {
      return ["31","32","33","34","35"];
    }

    if (hostname.endsWith(".vectant.ne.jp")){
      const vectant = hostname.match(/\.([a-z]+)\.(fdn|otk)\.vectant\.ne\.jp$/);
      if (vectant && vectant[1]){
        return [VectantHostnamePrefMap[vectant[1]]];
      }
    }

    //https://www.catv-jcta.jp/search/detail/10110371
    //吉備テレビは岡山県のみ
    if (hostname.endsWith(".kibi.ne.jp")){
      return ["33"];
    }

    //https://www.catv-jcta.jp/search/detail/10110216
    //トコちゃんねる静岡は静岡県静岡市のみ
    if (hostname.endsWith(".dws.ne.jp")){
      return ["220010"];
    }

    //https://www.pikara.jp/net/area.html
    //ピカラネットは四国地方のみ
    if (hostname.endsWith(".pikara.ne.jp")){
      return ["36","37","38","39"];
    }

    //https://www.bbiq.jp/
    //BBIQは九州地方のみ
    if (hostname.endsWith(".ppp.bbiq.jp")){
      return ["40","41","42","43","44","45","46"];
    }

    //https://www.catv-jcta.jp/search/detail/10110101
    //東京ベイネットワークは東京都のみ
    if (hostname.endsWith(".baynet.jp")){
      return ["13"];
    }

    //https://www.catv-jcta.jp/search/detail/10110103
    //豊島ケーブルネットワークは東京都のみ
    if (hostname.endsWith(".toshima.ne.jp")){
      return ["13"];
    }

    //https://www.catv-jcta.jp/search/detail/10110219
    //ＴＯＫＡＩケーブルネットワークは静岡県のみ
    if (hostname.endsWith(".thn.ne.jp")){
      return ["23"];
    }

    //https://www.catv-jcta.jp/search/detail/10110117
    //いちはらケーブルテレビは千葉県北西部のみ
    if (hostname.endsWith(".icntv.ne.jp")){
      return ["120010"];
    }

    //https://www.george24.com/support/faq/138.php
    //全国らしい
    if (hostname.endsWith(".george24.com")){
      return undefined;
    }

    //https://www.cyberhome.ne.jp/app/home.do
    //全国らしい?(不明)
    if (hostname.endsWith(".cyberhome.ne.jp")){
      return undefined;
    }

    //https://www.itscom.co.jp/info/areamap/
    //東京・神奈川
    if (hostname.endsWith(".itscom.jp")){
      return ["13","14"];
    }

    //https://bb.excite.co.jp/
    //全国らしい?(不明)
    if (hostname.endsWith(".bbexcite.jp")){
      return undefined;
    }

    //https://www.catv-jcta.jp/search/detail/10110421
    //愛媛ＣＡＴＶは愛媛の中予/南予のみ
    if (hostname.endsWith(".e-catv.ne.jp")){
      return ["380010","380030"];
    }

    //https://www.catv-jcta.jp/search/detail/10110047
    //ニューメディアは北海道函館市,北斗市,七飯町/山形県米沢市,南陽市,高畠町,川西町/福島県福島市/新潟県新潟市北区,新潟市東区,新潟市中央区,新潟市西区のみ
    if (hostname.endsWith(".ncv.co.jp")){
      return [
        "017010",//北海道函館市,北斗市,七飯町
        "060020",//山形県米沢市,南陽市,高畠町,川西町
        "070010",//福島県福島市
        "150010",//新潟県新潟市北区,新潟市東区,新潟市中央区,新潟市西区
      ]
    }

    //https://www.catv-jcta.jp/search/detail/10110383
    //ちゅピＣＯＭは広島県のみ
    if (hostname.endsWith(".fch.ne.jp")){
      return ["34"];
    }

    //https://www.catv-jcta.jp/search/detail/10110486
    //大分ケーブルテレコムは大分県のみ
    if (hostname.endsWith(".octv.ne.jp")){
      return ["44"];
    }

    //https://www.catv-jcta.jp/search/detail/10112002
    //飛騨高山ケーブルネットワークは岐阜県のみ
    if (hostname.endsWith(".hidatakayama.ne.jp")){
      return ["210020"];
    }

    //https://www.catv-jcta.jp/search/detail/10110363
    //鳥取テレトピアは鳥取県鳥取市のみ
    if (hostname.endsWith(".inabapyonpyon.net")){
      return ["310010"];
    }

    //https://www.catv-jcta.jp/search/detail/10110391
    //アイ・キャンは山口県東部のみ
    if (hostname.endsWith(".icn-tv.ne.jp")){
      return ["350030"];
    }

    //https://www.catv-jcta.jp/search/detail/10110261
    //アドバンスコープは三重県のみ
    if (hostname.endsWith(".asint.jp")){
      return ["240010"];
    }

    //https://www.catv-jcta.jp/search/detail/10110368
    //石見ケーブルビジョンは島根県のみ
    if (hostname.endsWith(".iwamicatv.jp")){
      return ["320020"];
    }

    //https://xtom.com/
    //クラウドサービスのため不明
    if (hostname.endsWith(".xtom.jp")){
      return undefined;
    }

    //https://www.catv-jcta.jp/search/detail/10112017
    //周防ケーブルネットは山口県柳井市のみ
    if (hostname.endsWith(".net-scn.jp")){
      return ["350030"];
    }

    //https://www.catv-jcta.jp/search/detail/10110376
    //笠岡放送は岡山県のみ
    if (hostname.endsWith(".kcv.ne.jp")){
      return ["330010"];
    }

    //https://www.catv-jcta.jp/search/detail/10110056
    //鹿沼ケーブルテレビは栃木県鹿沼市のみ
    if (hostname.endsWith(".bc9.ne.jp")){
      return ["090010"];
    }

    //https://www.glbb.jp/service/business/glbb-hikari/
    //GLBBは東京、神奈川、青森、沖縄らしい?
    if (hostname.endsWith(".glbb.ne.jp")){
      return ["13","14","02","47"];
    }

    //https://www.catv-jcta.jp/search/detail/10110076
    //本庄ケーブルテレビは埼玉県のみ
    if (hostname.endsWith(".catnet.jp")){
      return ["110020"];
    }

    //https://www.catv-jcta.jp/search/detail/10112025
    //わたらせテレビは栃木県、群馬県のみ
    if (hostname.endsWith(".watv.ne.jp")){
      return [
        "090010",//栃木県足利市
        "100010"//群馬県太田市        
      ];
    }
    
    //https://www.catv-jcta.jp/search/detail/10110055
    //宇都宮ケーブルテレビは栃木県のみ
    if (hostname.endsWith(".ucatv.ne.jp")){
      return ["090010"];
    }

    //https://nerocloud.io/en/
    //中国系クラウド?
    if (hostname.endsWith(".nerocloud.io")){
      return undefined;
    }

    //https://www.catv-jcta.jp/search/detail/10110223
    //浜松ケーブルテレビ
    if (hostname.endsWith(".winde.jp")){
      return ["220040"];
    }

    //au-net.ne.jpはAUのLTE?
    if (hostname.endsWith(".au-net.ne.jp")){
      return undefined;
    }

    //dion.ne.jpはauの固定回線?
    if (hostname.endsWith(".dion.ne.jp")){
      return undefined;
    }

    //enablerは全国?
    if (hostname.endsWith(".enabler.ne.jp")){
      return undefined;
    }

    //https://www.catv-jcta.jp/search/detail/10110143
    //ＹＯＵテレビは神奈川県のみ
    if (hostname.endsWith(".netyou.jp")){
      return ["140010"];
    }

    //https://okinawa-cellular.jp/personal/hikari/
    //沖縄セルラーは沖縄県のみ
    if (hostname.endsWith(".au-hikari.ne.jp")){
      return ["47"];
    }

    //https://www.kamome.or.jp/
    //かもめインターネットは全国?
    if (hostname.endsWith(".kamome.or.jp")){
      return undefined;
    }

    //https://www.catv-jcta.jp/search/detail/10110122
    //ジェイコム千葉は千葉+東京?
    if (hostname.endsWith(".rurbannet.ne.jp")){
      return ["12","13"];
    }

    //.jptransit.netは不明
    if (hostname.endsWith(".jptransit.net")){
      return undefined;
    }

    //.yournet.ne.jpは全国?
    if (hostname.endsWith(".yournet.ne.jp")){
      return undefined;
    }

    //.home.ne.jpはJ:COM系で全国?
    if (hostname.endsWith(".home.ne.jp")){
      return undefined;
    }
  }catch{}
}
