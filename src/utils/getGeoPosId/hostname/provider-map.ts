import { GeoPosSuggestion } from "@/const/geo-pos-list";

export const ProviderMap = {
  //https://www.catv-jcta.jp/search/detail/10110281
  //https://www.kanazawacable.jp/join/area/
  //金沢ケーブルは石川県のみ
  "kanazawacable.jp": ["17"],

  //https://www.megaegg.jp/area/megaegg/?svc=1
  //メガエッグは中国地方のみ
  "megaegg.ne.jp": ["31", "32", "33", "34", "35"],

  //https://www.catv-jcta.jp/search/detail/10110371
  //吉備テレビは岡山県のみ
  "kibi.ne.jp": ["33"],

  //https://www.catv-jcta.jp/search/detail/10110216
  //トコちゃんねる静岡は静岡県静岡市のみ
  "dws.ne.jp": ["220010"],

  //https://www.pikara.jp/net/area.html
  //ピカラネットは四国地方のみ
  "pikara.ne.jp": ["36", "37", "38", "39"],

  //https://www.bbiq.jp/
  //BBIQは九州地方のみ
  "ppp.bbiq.jp": ["40", "41", "42", "43", "44", "45", "46"],

  //https://www.catv-jcta.jp/search/detail/10110101
  //東京ベイネットワークは東京都のみ
  "baynet.jp": ["130010"],

  //https://www.catv-jcta.jp/search/detail/10110103
  //豊島ケーブルネットワークは東京都のみ
  "toshima.ne.jp": ["130010"],

  //https://www.catv-jcta.jp/search/detail/10110219
  //ＴＯＫＡＩケーブルネットワークは静岡県のみ
  "thn.ne.jp": ["23"],

  //https://www.catv-jcta.jp/search/detail/10110117
  //いちはらケーブルテレビは千葉県北西部のみ
  "icntv.ne.jp": ["120010"],

  //https://www.itscom.co.jp/info/areamap/
  //東京・神奈川
  "itscom.jp": ["130010", "140010"],
  "246.ne.jp": ["130010", "140010"],

  //https://www.catv-jcta.jp/search/detail/10110421
  //愛媛ＣＡＴＶは愛媛の中予/南予のみ
  "e-catv.ne.jp": ["380010", "380030"],

  //https://www.catv-jcta.jp/search/detail/10110047
  //ニューメディアは北海道函館市,北斗市,七飯町/山形県米沢市,南陽市,高畠町,川西町/福島県福島市/新潟県新潟市北区,新潟市東区,新潟市中央区,新潟市西区のみ
  "ncv.co.jp": [
    "017010", // 北海道函館市,北斗市,七飯町
    "060020", // 山形県米沢市,南陽市,高畠町,川西町
    "070010", // 福島県福島市
    "150010", // 新潟県新潟市北区,新潟市東区,新潟市中央区,新潟市西区
  ],

  //https://www.catv-jcta.jp/search/detail/10110383
  //ちゅピＣＯＭは広島県のみ
  "fch.ne.jp": ["34"],

  //https://www.catv-jcta.jp/search/detail/10110486
  //大分ケーブルテレコムは大分県のみ
  "octv.ne.jp": ["44"],

  //https://www.catv-jcta.jp/search/detail/10112002
  //飛騨高山ケーブルネットワークは岐阜県のみ
  "hidatakayama.ne.jp": ["210020"],

  //https://www.catv-jcta.jp/search/detail/10110363
  //鳥取テレトピアは鳥取県鳥取市のみ
  "inabapyonpyon.net": ["310010"],

  //https://www.catv-jcta.jp/search/detail/10110391
  //アイ・キャンは山口県東部のみ
  "icn-tv.ne.jp": ["350030"],

  //https://www.catv-jcta.jp/search/detail/10110261
  //アドバンスコープは三重県のみ
  "asint.jp": ["240010"],

  //https://www.catv-jcta.jp/search/detail/10110368
  //石見ケーブルビジョンは島根県のみ
  "iwamicatv.jp": ["320020"],

  //https://www.catv-jcta.jp/search/detail/10112017
  //周防ケーブルネットは山口県柳井市のみ
  "net-scn.jp": ["350030"],

  //https://www.catv-jcta.jp/search/detail/10110376
  //笠岡放送は岡山県のみ
  "kcv.ne.jp": ["330010"],

  //https://www.catv-jcta.jp/search/detail/10110056
  //鹿沼ケーブルテレビは栃木県鹿沼市のみ
  "bc9.ne.jp": ["090010"],

  //https://www.glbb.jp/service/business/glbb-hikari/
  //GLBBは東京、神奈川、青森、沖縄らしい?
  "glbb.ne.jp": ["13", "14", "02", "47"],

  //https://www.catv-jcta.jp/search/detail/10110076
  //本庄ケーブルテレビは埼玉県のみ
  "catnet.jp": ["110020"],

  //https://www.catv-jcta.jp/search/detail/10112025
  //わたらせテレビは栃木県、群馬県のみ
  "watv.ne.jp": [
    "090010", // 栃木県足利市
    "100010", // 群馬県太田市
  ],

  //https://www.catv-jcta.jp/search/detail/10110055
  //宇都宮ケーブルテレビは栃木県のみ
  "ucatv.ne.jp": ["090010"],

  //https://www.catv-jcta.jp/search/detail/10110223
  //浜松ケーブルテレビ
  "winde.jp": ["220040"],

  //https://www.catv-jcta.jp/search/detail/10110143
  //ＹＯＵテレビは神奈川県のみ
  "netyou.jp": ["140010"],

  //https://okinawa-cellular.jp/personal/hikari/
  //沖縄セルラーは沖縄県のみ
  "au-hikari.ne.jp": ["47"],

  //https://www.catv-jcta.jp/search/detail/10110122
  //ジェイコム千葉は千葉+東京?
  "rurbannet.ne.jp": ["12", "13"],
} satisfies Record<string, GeoPosSuggestion[] | undefined> as Record<
  string,
  GeoPosSuggestion[] | undefined
>;
