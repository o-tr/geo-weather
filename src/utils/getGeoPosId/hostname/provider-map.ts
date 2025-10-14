import type { GeoPosSuggestion } from "@/const/geo-pos-list";
import { 東日本, 西日本 } from "./pos-geoId-map";

export const ProviderMap = {
  //https://www.catv-jcta.jp/search/detail/10110281
  //https://www.kanazawacable.jp/join/area/
  //金沢ケーブルは石川県のみ
  "kanazawacable.jp": ["17"],
  "spacelan.ne.jp": ["17"],

  //https://www.megaegg.jp/area/megaegg/?svc=1
  //メガエッグは中国地方のみ
  "megaegg.ne.jp": ["31", "32", "33", "34", "35"],

  //https://www.catv-jcta.jp/search/detail/10110371
  //吉備テレビは岡山県のみ
  "kibi.ne.jp": ["33"],

  //https://www.catv-jcta.jp/search/detail/10110216
  //トコちゃんねる静岡は静岡県静岡市のみ
  "dws.ne.jp": ["220010"],
  //https://www.across.or.jp/
  "across.or.jp": ["22"],

  //https://www.pikara.jp/net/area.html
  //ピカラネットは四国地方のみ
  "pikara.ne.jp": ["36", "37", "38", "39"],

  //株式会社STNet
  //https://www.stnet.co.jp/
  //ぴからの親っぽい
  "stnet.ne.jp": ["36", "37", "38", "39"],

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
  "eastcom.ne.jp": ["120010"],

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
  "ncv.ne.jp": [
    "017010", // 北海道函館市,北斗市,七飯町
    "060020", // 山形県米沢市,南陽市,高畠町,川西町
    "070010", // 福島県福島市
    "150010", // 新潟県新潟市北区,新潟市東区,新潟市中央区,新潟市西区
  ],
  "ncv.jp": [
    "017010", // 北海道函館市,北斗市,七飯町
    "060020", // 山形県米沢市,南陽市,高畠町,川西町
    "070010", // 福島県福島市
    "150010", // 新潟県新潟市北区,新潟市東区,新潟市中央区,新潟市西区
  ],
  "omn.ne.jp": [
    "017010", // 北海道函館市,北斗市,七飯町
    "060020", // 山形県米沢市,南陽市,高畠町,川西町
    "070010", // 福島県福島市
    "150010", // 新潟県新潟市北区,新潟市東区,新潟市中央区,新潟市西区
  ],
  "tlp.ne.jp": [
    "017010", // 北海道函館市,北斗市,七飯町
    "060020", // 山形県米沢市,南陽市,高畠町,川西町
    "070010", // 福島県福島市
    "150010", // 新潟県新潟市北区,新潟市東区,新潟市中央区,新潟市西区
  ],

  //https://www.catv-jcta.jp/search/detail/10110383
  //ちゅピＣＯＭは広島県のみ
  "fch.ne.jp": ["34"],
  "hicat.ne.jp": ["34"],

  //https://www.catv-jcta.jp/search/detail/10110486
  //大分ケーブルテレコムは大分県のみ
  "octv.ne.jp": ["44"],
  "oct-net.ne.jp": ["44"],

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
  "nava21.ne.jp": ["240010"],

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

  //https://ja.wikipedia.org/wiki/%E3%82%89%E3%83%BC%E3%81%B0%E3%82%93%E3%81%AD%E3%81%A3%E3%81%A8#%E6%8F%90%E4%BE%9B%E5%8C%BA%E5%9F%9F%E5%86%85%E8%87%AA%E6%B2%BB%E4%BD%93
  //らーばんねっと
  //千葉県 印西市 白井市 船橋市
  "rurbannet.ne.jp": ["120010"],

  //https://www.catv-jcta.jp/search/detail/10112120
  //壱岐市ケーブルテレビは長崎県壱岐市のみ
  "iq-hikari.jp": ["420030"],

  //https://www.catv-jcta.jp/search/detail/10110144
  //横浜ケーブルビジョン(株)は横浜市のみ
  "catv-yokohama.ne.jp": ["140010"],

  //https://www.catv-jcta.jp/search/detail/10110489
  // 	(株)ケーブルテレビ佐伯は大分県佐伯市
  "cts-net.ne.jp": ["440040"],

  //https://www.catv-jcta.jp/search/detail/10110369
  //井原放送(株)は岡山県井原市  広島県福山市
  "ibara.ne.jp": ["330010", "340010"],

  //https://www.catv-jcta.jp/search/detail/10110187
  //上越ケーブルビジョン(株)は新潟県妙高市上越市
  "joetsu.ne.jp": ["150030"],

  //https://www.catv-jcta.jp/search/detail/10110394
  //(株)シティーケーブル周南は山口県周南市
  "ccsnet.ne.jp": ["350020"],

  //https://www.catv-jcta.jp/search/detail/10110032
  //仙台ＣＡＴＶ(株)宮城県仙台市/名取市
  "cat-v.ne.jp": ["040010", "040020"],

  //https://www.catv-jcta.jp/search/detail/10112052
  //(株)たけはらケーブルネットワークは広島県竹原市
  "tanet.ne.jp": ["340010"],

  //https://www.catv-jcta.jp/search/detail/10110274
  //射水ケーブルネットワーク(株)は富山県高岡市射水市
  "canet.ne.jp": ["160020"],

  //https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%82%A4%E3%82%B3%E3%83%A0%E6%97%A5%E9%87%8E
  //ジェイコム日野はジェイコム東京に吸収されたので東京で良い?
  "hinocatv.ne.jp": ["130010"],

  //https://www.daido-it.ac.jp/outline/access/
  //大同大学は愛知県名古屋市
  "daido-it.ac.jp": ["230010"],

  //https://www.it-chiba.ac.jp/institute/access/
  //千葉工業大学は千葉県習志野市と東京都墨田区
  "it-chiba.ac.jp": ["130010", "120010"],

  //https://www.kitami-it.ac.jp/access/
  //北見工業大学は北海道北見市
  "kitami-it.ac.jp": ["013010", "013020"],

  //https://www.kurume-nct.ac.jp/kikaku/Access.html
  //久留米工業高等専門学校は福岡県久留米市
  "kurume-nct.ac.jp": ["400040"],

  //https://www.nagoya-u.ac.jp/contact/directions.html
  //名古屋大学は愛知県名古屋市
  "nagoya-u.ac.jp": ["230010"],

  //https://www.t-kougei.ac.jp/
  //東京工芸大学は東京都中野区と神奈川県厚木市
  "t-kougei.ac.jp": ["130010", "140020"],

  //https://www.tohoku.ac.jp/japanese/profile/campus/01/access/
  //東北大学は宮城県仙台市
  "tohoku.ac.jp": ["040010"],

  //https://www.catv-jcta.jp/search/detail/10110372
  //(株)倉敷ケーブルテレビは岡山県岡山市南区  倉敷市  玉野市  総社市  早島町
  "kct.ad.jp": ["330010"],

  //https://www.catv-jcta.jp/search/detail/10110207
  //(株)アミックスコムは岐阜県恵那市  輪之内町
  "amixcom.jp": ["210010"],

  //https://www.catv-jcta.jp/search/detail/10110344
  //ＢＡＮ−ＢＡＮネットワークス(株)は兵庫県加古川市  高砂市  稲美町  播磨町
  "banban.jp": ["280010"],

  //https://www.bwa.jp/service-charge/servicearea/
  //兵庫県神戸市・芦屋市・宝塚市・川西市・明石市
  //京都府京都市・長岡京市・向日市・乙訓郡大山崎町
  //大阪府大阪市吹田市・茨木市・豊中市・池田市・摂津市・三島郡島本町
  "bwa.jp": ["280010", "260010", "270000"],

  //https://web.archive.org/web/20100506081501/http://www.cnc.co.jp/entry/area/map/index.html
  //千葉県千葉市
  "cnc.jp": ["120010"],

  //https://www.catv-jcta.jp/search/detail/10110126
  //成田ケーブルテレビ(株)は千葉県成田市  富里市
  "nctv.co.jp": ["120010"],

  //https://www.catv-jcta.jp/search/detail/10110417
  //(株)四国中央テレビは愛媛県四国中央市
  "cosmostv.jp": ["380020"],

  //https://www.catv-jcta.jp/search/detail/10110040
  //(株)秋田ケーブルテレビは秋田県秋田市  潟上市  三種町  五城目町
  "feba.jp": ["050010"],
  "cna.ne.jp": ["050010"],

  //https://www.unnan-yume.net/catv/service-net/net.php
  "iinan-net.jp": ["320010"],

  //https://www.catv-jcta.jp/search/detail/10110280
  //加賀ケーブル(株)は石川県加賀市
  "kagacable.jp": ["170010"],
  "kagacable.ne.jp": ["170010"],

  //https://www.catv-jcta.jp/search/detail/10110488
  //ＫＣＶコミュニケーションズ(株)は大分県日田市
  "kcv.jp": ["440030"],

  //https://www.catv-jcta.jp/search/detail/10110150
  //河口湖有線テレビ放送(有)は山梨県富士河口湖町
  "lcnet.jp": ["190020"],

  //https://www.catv-jcta.jp/search/detail/10112130
  //能登町は石川県能登町
  "luckynet.jp": ["170020"],

  //https://www.catv-jcta.jp/search/detail/10110367
  //山陰ケーブルビジョン(株)は島根県松江市  安来市
  "mable.jp": ["320010"],
  "dojyokko.ne.jp": ["320010"],
  "mable.ne.jp": ["320010"],

  //https://www.maro-v.jp/~hitomaro/
  //ひとまろビジョンは島根県益田市
  "maro-v.jp": ["320020"],

  //https://www.catv-jcta.jp/search/detail/10112007
  //七尾市は石川県七尾市
  "nanaonet.jp": ["170020"],

  //https://www.catv-jcta.jp/search/detail/10110333
  //(株)テレビ岸和田
  // 大阪府岸和田市  忠岡町
  //sensyu.ne.jp以外のドメインは存在しないので逆引き設定多分ミスってる
  "sensyu.ne.jp": ["270000"],
  "116-sensyu.ne.jp": ["270000"],
  "117-sensyu.ne.jp": ["270000"],
  "2-sensyu.ne.jp": ["270000"],
  "237-sensyu.ne.jp": ["270000"],
  "240-sensyu.ne.jp": ["270000"],

  //https://www.catv-jcta.jp/search/detail/10110051
  //(一財)研究学園都市コミュニティケーブルサービスは茨城県つくば市
  "accsnet.ne.jp": ["080020"],

  //https://www.catv-jcta.jp/search/detail/10110010
  //青森ケーブルテレビ(株)は青森県青森市
  "actv.ne.jp": ["020010"],

  //https://web.archive.org/web/20070607172057/http://www.adachi.ne.jp/faq/m/n_faq1.html
  //足立ケーブルテレビ(株)は東京都足立区
  "adachi.ne.jp": ["130010"],

  //http://www.aitai.ne.jp/
  //豊田市/みよし市/長久手市 蒲郡市/幸田町 多治見市/土岐市/瑞浪市 岐阜市/北方町/岐南町/笠松町 各務原市川島/羽島市/関市/美濃市 瑞穂市/山県市/下呂市
  "aitai.ne.jp": ["230010", "230020", "210010", "210020"],

  //https://web.archive.org/web/20040603044501/http://www.itv-mie.jp/catv/catvdairiten.html
  //株式会社アイティービーは三重県伊勢市 度会郡 多気郡 志摩市 松阪市 南伊勢町
  "amigo.ne.jp": ["240020", "240010"],
  "amigo2.ne.jp": ["240020", "240010"],

  //https://www.catv-jcta.jp/search/detail/10110165
  //あづみ野テレビ(株)は長野県松本市  安曇野市  池田町  松川村
  "anc-tv.ne.jp": ["200020", "200010"],

  //https://www.catv-jcta.jp/search/detail/10110283
  //(株)あさがおテレビは石川県白山市
  "asagaotv.ne.jp": ["170010"],

  //https://hikari.aso.ne.jp/outline/
  //一般財団法人 阿蘇テレワークセンターは熊本県阿蘇市産山村
  "aso.ne.jp": ["430020"],

  //https://www.catv-jcta.jp/search/detail/10110460
  //(株)ネット鹿島は佐賀県鹿島市
  "asunet.ne.jp": ["410010"],

  //https://www.catv-jcta.jp/search/detail/10110414
  //テレビ阿波(株)は徳島県美馬市
  "awacco.ne.jp": ["360010"],

  //https://www.catv-jcta.jp/search/detail/10110130
  //厚木伊勢原ケーブルネットワーク(株)は神奈川県厚木市
  "ayu.ne.jp": ["140020"],

  //https://www.catv-jcta.jp/search/detail/10110350
  //(株)ベイ・コミュニケーションズは大阪府,兵庫県 神戸市北区  尼崎市  西宮市  伊丹市  宝塚市  川西市
  "bai.ne.jp": ["270000", "280010"],

  //https://www.catv-jcta.jp/search/detail/10110496
  //ＢＴＶ(株)は宮崎県都城市  日南市  小林市  三股町  高原町  鹿児島県鹿児島市  曽於市  志布志市
  "btvm.ne.jp": ["450030", "450010", "460010", "460020"],

  //https://www.catv-jcta.jp/search/detail/10110456
  //佐賀シティビジョン(株)は佐賀県佐賀市  小城市  神埼市  吉野ヶ里町
  "bunbun.ne.jp": ["410010"],

  //https://www.catv-jcta.jp/search/detail/10110397
  //山口ケーブルビジョン(株)は山口県宇部市  山口市  防府市  美祢市
  "c-able.ne.jp": ["350010", "350020", "350040"],

  //https://web.archive.org/web/20070205193524/http://www.jcn-yokohama.co.jp/entry/area/index.html
  //横浜市
  "c3-net.ne.jp": ["140010"],

  //https://www.catv-jcta.jp/search/detail/10110454
  //(株)ケーブルワンは佐賀県武雄市  大町町  江北町  白石町
  "cableone.ne.jp": ["410010"],

  //https://www.catv-jcta.jp/search/detail/10110234
  //(株)ＣＡＣは愛知県半田市  阿久比町  武豊町
  "cac-net.ne.jp": ["230010"],

  //https://www.catv-jcta.jp/search/detail/10110127
  //(株)広域高速ネット二九六は千葉県千葉市花見川区  千葉市若葉区  千葉市緑区  茂原市  成田市  佐倉市  東金市  四街道市  八街市  印西市  富里市  香取市  山武市  大網白里市  酒々井町  栄町  神崎町
  "catv296.ne.jp": ["120010", "120020"],

  //https://www.catv-jcta.jp/search/detail/10110045
  //(株)ダイバーシティメディアは山形県山形市  天童市  山辺町
  "catvy.ne.jp": ["060010"],

  //https://www.catv-jcta.jp/search/detail/10110059
  //ケーブルテレビ(株)は茨城県結城市  筑西市 栃木県栃木市  下野市  上三川町  壬生町 群馬県館林市  板倉町  明和町  千代田町  邑楽町
  "cc9.ne.jp": ["080020", "090010", "100010"],

  //https://www.catv-jcta.jp/search/detail/10110382
  //(株)ケーブル・ジョイは広島県福山市  府中市  神石高原町
  "ccjnet.ne.jp": ["340010"],

  //https://www.catv-jcta.jp/search/detail/10110239
  //ＣＣＮｅｔ(株)
  //岐阜県美濃加茂市  各務原市  本巣市  養老町  川辺町  八百津町  白川町
  //愛知県名古屋市緑区  春日井市  豊川市  犬山市  小牧市  豊明市  日進市  東郷町  大口町  扶桑町
  //三重県桑名市  朝日町  川越町
  "ccnet-ai.ne.jp": ["210010", "230010", "230020", "240010"],
  "ccnet.ne.jp": ["210010", "230010", "230020", "240010"],
  "ccnw.ne.jp": ["210010", "230010", "230020", "240010"],
  //三重のみだと思われるが確証がないので一応
  "ccnetmie.ne.jp": ["210010", "230010", "230020", "240010"],

  //https://www.catv-jcta.jp/search/detail/10110361
  //(株)中海テレビ放送
  //鳥取県米子市  境港市  日吉津村  大山町  南部町  伯耆町  日南町  日野町
  "chukai.ne.jp": ["310020"],

  //https://www.catv-jcta.jp/search/detail/10110243
  //西尾張シーエーティーヴィ(株)
  //愛知県津島市  稲沢市  愛西市  清須市  弥富市  あま市  大治町  蟹江町
  "clovernet.ne.jp": ["230010"],

  //https://www.catv-jcta.jp/search/detail/10110475
  //(株)長崎ケーブルメディア
  //長崎県長崎市  西海市  長与町  時津町
  "cncm.ne.jp": ["420010"],

  //https://www.catv-jcta.jp/search/detail/10110273
  //能越ケーブルネット(株)
  // 富山県氷見市
  // 石川県珠洲市  羽咋市  穴水町
  "cnh.ne.jp": ["160020", "170020"],

  //https://csf.ne.jp/service_area/
  //ケーブルステーション福岡
  //福岡県 春日市 大野城市 太宰府市 那珂川市 筑紫野市 宇美町 志免町 須恵町 粕屋町 嘉麻市
  "csf.ne.jp": ["400010", "400030"],

  //https://www.catv-jcta.jp/search/detail/10110490
  //ＣＴＢメディア(株)
  //大分県 別府市  日出町
  "ctb.ne.jp": ["440010"],

  //https://www.catv-jcta.jp/search/detail/10110203
  //(株)ケーブルテレビ可児
  //岐阜県 可児市  御嵩町
  "ctk.ne.jp": ["210010"],

  //https://www.catv-jcta.jp/search/detail/10110271
  //(株)ケーブルテレビ富山
  //富山県 富山市  舟橋村
  "ctt.ne.jp": ["160010"],

  //https://www.catv-jcta.jp/search/detail/10110258
  //(株)シー・ティー・ワイ
  //三重県 四日市市  桑名市  いなべ市  木曽岬町  菰野町
  "cty-net.ne.jp": ["240010"],

  //https://www.catv-jcta.jp/search/detail/10110152
  //(有)峡西シーエーテーブイ
  //山梨県 南アルプス市
  "cvk.ne.jp": ["190010"],

  //https://www.catv-jcta.jp/search/detail/10110289
  //福井ケーブルテレビ(株)
  //福井県 福井市  永平寺町  池田町  南越前町
  "fctv.ne.jp": ["180010"],

  //https://www.catv-jcta.jp/search/detail/10110159
  //山梨ＣＡＴＶ(株)
  //山梨県 山梨市
  "fruits.ne.jp": ["190010"],

  //https://www.catv-jcta.jp/search/detail/10110233
  //グリーンシティケーブルテレビ(株)
  //愛知県 名古屋市守山区  瀬戸市  尾張旭市
  "gctv.ne.jp": ["230010"],

  //https://www.catv-jcta.jp/search/detail/10112026
  //(株)五島テレビ
  //長崎県 五島市
  "goto-tv.ne.jp": ["420040"],

  //https://www.catv-jcta.jp/search/detail/10110206
  //郡上ケーブルテレビ放送センター
  //岐阜県 郡上市
  "gujo-tv.ne.jp": ["210010"],

  //https://www.catv-jcta.jp/search/detail/10110451
  //伊万里ケーブルテレビジョン(株)
  //佐賀県 伊万里市
  "hachigamenet.ne.jp": ["410020"],

  //https://www.catv-jcta.jp/search/detail/10110461
  //藤津ケーブルビジョン(株)
  //佐賀県 小城市  嬉野市  太良町
  "hagakure.ne.jp": ["410010"],

  //https://www.catv-jcta.jp/search/detail/10112189
  //萩テレビ(株)
  //島根県 益田市
  //山口県 萩市  阿武町
  "haginet.ne.jp": ["320020", "350040"],

  //https://www.catv-jcta.jp/search/detail/10110079
  //東松山ケーブルテレビ(株)
  //埼玉県 東松山市  滑川町
  "hctv.ne.jp": ["110020"],

  //https://www.catv-jcta.jp/search/detail/10110476
  //(株)ひまわりてれび
  //長崎県 島原市  雲仙市  南島原市
  "himawarinet.ne.jp": ["420010"],

  //https://www.catv-jcta.jp/search/detail/10110210
  //(株)伊豆急ケーブルネットワーク
  //神奈川県 湯河原町
  //静岡県 熱海市  伊東市  下田市  東伊豆町
  "i-younet.ne.jp": ["140020", "220020"],

  //https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%82%A4%E3%82%B3%E3%83%A0%E5%B8%82%E5%B7%9D#%E6%8F%90%E4%BE%9B%E5%8C%BA%E5%9F%9F%E5%86%85%E8%87%AA%E6%B2%BB%E4%BD%93
  //ジェイコム市川
  //千葉県 市川市
  "icnet.ne.jp": ["120010"],

  //https://www.catv-jcta.jp/search/detail/10110255
  //伊賀上野ケーブルテレビ(株)
  //三重県 伊賀市
  "ict.ne.jp": ["240010"],

  //https://www.catv-jcta.jp/search/detail/10110065
  //入間ケーブルテレビ(株)
  // 埼玉県 入間市
  // 東京都 瑞穂町
  "ictv.ne.jp": ["110010", "130010"],

  //https://www.catv-jcta.jp/search/detail/10110465
  //諫早ケーブルメディア(株)
  //長崎県 長崎市  諫早市  雲仙市
  "icv-net.ne.jp": ["420010"],

  //https://www.ii-okinawa.ad.jp/
  //沖縄県
  "ii-okinawa.ne.jp": ["47"],

  //https://www.catv-jcta.jp/search/detail/10112135
  //黒潮町
  //高知県 黒潮町
  "iwk.ne.jp": ["390030"],

  //https://www.catv-jcta.jp/search/detail/10110054
  //(株)ＪＷＡＹ
  //茨城県 日立市  ひたちなか市  東海村
  "jway.ne.jp": ["080010"],

  //https://www.catv-jcta.jp/search/detail/10110232
  //(株)キャッチネットワーク
  //愛知県 碧南市  刈谷市  安城市  西尾市  知立市  高浜市
  "katch.ne.jp": ["230010"],

  //https://www.catv-jcta.jp/search/detail/10110355
  //近鉄ケーブルネットワーク(株)
  //奈良県 奈良市  大和高田市  大和郡山市  天理市  橿原市  桜井市  五條市  御所市  生駒市  香芝市  葛城市  宇陀市  山添村  平群町  三郷町  斑鳩町  安堵町  川西町  三宅町  田原本町  曽爾村  御杖村  高取町  明日香村  上牧町  王寺町  広陵町  河合町  吉野町  大淀町  下市町  黒滝村  天川村
  "kcn.ne.jp": ["290010", "290020"],

  //https://www.catv-jcta.jp/search/detail/10110345
  //神河町ケーブルテレビネットワーク
  //兵庫県 神河町
  "kcni.ne.jp": ["280010"],

  //https://www.catv-jcta.jp/search/detail/10110310
  //(株)ＫＣＮ京都
  //京都府 宇治市  城陽市  京田辺市  木津川市  久御山町  精華町
  "kinet-tv.ne.jp": ["260010"],

  //https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%82%A4%E3%82%B3%E3%83%A0%E6%9D%B1%E4%BA%AC%E5%8C%97#%E6%8F%90%E4%BE%9B%E5%8C%BA%E5%9F%9F%E5%86%85%E8%87%AA%E6%B2%BB%E4%BD%93
  //ジェイコム東京北
  //東京都北区
  "kitanet.ne.jp": ["130010"],

  //https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%82%A4%E3%82%B3%E3%83%A0%E6%9D%B1%E8%91%9B%E8%91%9B%E9%A3%BE#%E6%8F%90%E4%BE%9B%E5%8C%BA%E5%9F%9F%E5%86%85%E8%87%AA%E6%B2%BB%E4%BD%93
  //    千葉県 流山市 野田市 松戸市
  //    東京都 葛飾区
  "koalanet.ne.jp": ["120010", "130010"],

  //https://www.catv-jcta.jp/search/detail/10110459
  //(株)テレビ九州
  //佐賀県 武雄市  嬉野市
  "ktknet.ne.jp": ["410010"],

  //https://www.catv-jcta.jp/search/detail/10110392
  //Ｋビジョン(株)
  //山口県 下松市  光市  周南市  上関町  平生町
  "kvision.ne.jp": ["350020", "350030"],

  //https://www.catv-jcta.jp/search/detail/10110002
  //旭川ケーブルテレビ(株)
  //北海道 旭川市  鷹栖町  東神楽町  当麻町  比布町  愛別町  東川町
  "lan-do.ne.jp": ["012010"],

  //https://www.catv-jcta.jp/search/detail/10110388
  //(株)ＭＣＡＴ
  //広島県 三原市  世羅町
  "mcat.ne.jp": ["340010"],

  //https://www.catv-jcta.jp/search/detail/10110505
  //南九州ケーブルテレビネット(株)
  //鹿児島県 霧島市  姶良市
  "mct.ne.jp": ["460010"],

  //https://www.catv-jcta.jp/search/detail/10110262
  //松阪ケーブルテレビ・ステーション(株)
  //三重県 松阪市  志摩市  多気町  明和町  大台町  大紀町
  "mctv.ne.jp": ["240010", "240020"],

  //https://www.catv-jcta.jp/search/detail/10110257
  //(株)ケーブルネット鈴鹿
  //三重県 鈴鹿市
  "mecha.ne.jp": ["240010"],

  //https://www.catv-jcta.jp/search/detail/10110238
  //知多メディアスネットワーク(株)
  //愛知県 東海市  大府市  知多市  東浦町
  "medias.ne.jp": ["230010"],

  //https://www.catv-jcta.jp/search/detail/10110244
  //ミクスネットワーク(株)
  //愛知県 岡崎市
  "mics.ne.jp": ["230010"],

  //https://www.catv-jcta.jp/search/detail/10112163
  //新川地域介護保険・ケーブルテレビ事業組合
  //富山県 黒部市  入善町  朝日町
  "milale.ne.jp": ["160010"],

  //https://www.catv-jcta.jp/search/detail/10110497
  //宮崎ケーブルテレビ(株)
  //宮崎県 宮崎市  西都市  国富町  綾町  高鍋町  新富町
  "miyazaki-catv.ne.jp": ["450010", "450020"],

  //https://www.catv-jcta.jp/search/detail/10110290
  //美方ケーブルネットワーク(株)
  //福井県 美浜町  若狭町
  "mmnet-ai.ne.jp": ["180020"],

  //https://www.catv-jcta.jp/search/detail/10110188
  //(株)エヌ・シィ・ティ
  //新潟県 長岡市  三条市  柏崎市  小千谷市  見附市  燕市
  "nct9.ne.jp": ["150020", "150010"],

  //https://www.catv-jcta.jp/search/detail/10110509
  //沖縄ケーブルネットワーク(株)
  //沖縄県 那覇市  宜野湾市  浦添市  沖縄市  豊見城市  北谷町  北中城村  西原町  南風原町
  "nirai.ne.jp": ["471010"],

  //https://www.catv-jcta.jp/search/detail/10110157
  //(株)日本ネットワークサービス
  //山梨県 甲府市  韮崎市  南アルプス市  北杜市  甲斐市  笛吹市  中央市  市川三郷町  身延町  昭和町
  "nns.ne.jp": ["190010"],

  //https://www.catv-jcta.jp/search/detail/10110467
  //おおむらケーブルテレビ(株)
  //長崎県 大村市
  "octp-net.ne.jp": ["420010"],

  //https://www.catv-jcta.jp/search/detail/10110201
  //(株)大垣ケーブルテレビ
  //岐阜県 大垣市  海津市  垂井町  関ケ原町  神戸町  揖斐川町  池田町
  "ogaki-tv.ne.jp": ["210010"],

  //https://www.catv-jcta.jp/search/detail/10112080
  //奥出雲町
  //島根県 奥出雲町
  "okuizumo.ne.jp": ["320010"],

  //https://www.catv-jcta.jp/search/detail/10110370
  //岡山ネットワーク(株)
  //岡山県 岡山市北区  岡山市中区  岡山市東区  岡山市南区  久米南町
  "oninet.ne.jp": ["330010", "330020"],

  //https://www.catv-jcta.jp/search/detail/10110230
  //(株)アイ・シー・シー
  //愛知県 一宮市
  "orihime.ne.jp": ["230010"],

  //https://www.catv-jcta.jp/search/detail/10110453
  //(株)ぴーぷる
  //佐賀県 唐津市
  "people-i.ne.jp": ["410020"],

  //https://www.catv-jcta.jp/search/detail/10112004
  //(株)三次ケーブルビジョン
  //広島県 三次市
  "pionet.ne.jp": ["340020"],

  //https://www.catv-jcta.jp/search/detail/10110292
  //(株)嶺南ケーブルネットワーク
  //福井県 敦賀市
  "rcn.ne.jp": ["180020"],

  //https://ja.wikipedia.org/wiki/J:COM_%E6%B8%AF%E3%83%BB%E6%96%B0%E5%AE%BF#%E6%8F%90%E4%BE%9B%E5%8C%BA%E5%9F%9F%E5%86%85%E8%87%AA%E6%B2%BB%E4%BD%93
  //J:COM 港・新宿
  //東京都 港区 新宿区
  "rosenet.ne.jp": ["130010"],

  //http://www.ryucom.ne.jp/
  //沖縄
  "ryucom.ne.jp": ["47"],

  //https://www.catv-jcta.jp/search/detail/10110139
  //湘南ケーブルネットワーク(株)
  //神奈川県 平塚市  大磯町  二宮町  中井町  大井町  松田町
  "scn-net.ne.jp": ["140010", "140020"],

  //https://www.catv-jcta.jp/search/detail/10110236
  //スターキャット(株)
  //愛知県 名古屋市千種区  名古屋市東区  名古屋市北区  名古屋市西区  名古屋市中村区  名古屋市中区  名古屋市昭和区  名古屋市瑞穂区  名古屋市熱田区  名古屋市中川区  名古屋市港区  名古屋市南区  名古屋市名東区  名古屋市天白区  江南市  岩倉市  清須市  北名古屋市  豊山町
  "starcat.ne.jp": ["230010"],

  //https://www.catv-jcta.jp/search/detail/10110240
  //知多半島ケーブルネットワーク(株)
  //愛知県 常滑市  南知多町  美浜町  武豊町
  "tac-net.ne.jp": ["230010"],

  //https://www.catv-jcta.jp/search/detail/10110374
  //玉島テレビ放送(株)
  //岡山県 倉敷市
  "tamatele.ne.jp": ["330010"],

  //https://www.catv-jcta.jp/search/detail/10110097
  //東京ケーブルネットワーク(株)
  //東京都 千代田区  中央区  文京区  荒川区
  "tcn-catv.ne.jp": ["130010"],

  //https://www.catv-jcta.jp/search/detail/10110275
  //高岡ケーブルネットワーク(株)
  //富山県 高岡市
  "tcnet.ne.jp": ["160020"],

  //https://www.catv-jcta.jp/search/detail/10110241
  //豊橋ケーブルネットワーク(株)
  //愛知県 豊橋市  新城市  田原市
  "tees.ne.jp": ["230010"],

  //https://faq.tokai-grp.jp/tnc/web/Search.aspx?Category=3498
  //TOKAIネットワーククラブ
  "tnc.ne.jp": ["22"],
  "tokai.or.jp": ["22"],

  //https://www.catv-jcta.jp/search/detail/10110362
  //鳥取中央有線放送(株)
  //鳥取県 湯梨浜町  琴浦町  北栄町
  "torichu.ne.jp": ["310020"],

  //https://www.catv-jcta.jp/search/detail/10110288
  //こしの都ネットワーク(株)
  //福井県 鯖江市  越前市  越前町
  "ttn.ne.jp": ["180010"],

  //https://www.catv-jcta.jp/search/detail/10110094
  //(株)多摩テレビ
  //東京都 八王子市  町田市  多摩市  稲城市
  "ttv.ne.jp": ["130010"],

  //https://www.catv-jcta.jp/search/detail/10110282
  //(株)テレビ小松
  //石川県 小松市  能美市
  "tvk.ne.jp": ["170010"],

  //https://www.catv-jcta.jp/search/detail/10110180
  //(株)テレビ松本ケーブルビジョン
  //長野県 松本市  塩尻市  山形村  朝日村
  "tvm.ne.jp": ["200020"],

  //https://www.catv-jcta.jp/search/detail/10110171
  //(株)上田ケーブルビジョン
  //長野県 上田市  東御市  青木村  坂城町
  "ueda.ne.jp": ["200020", "200010"],

  //https://www.catv-jcta.jp/search/detail/10110495
  //(株)ケーブルメディアワイワイ
  //宮崎県 延岡市  日向市  川南町  都農町  門川町  美郷町  高千穂町  日之影町
  "wainet.ne.jp": ["450020", "450040"],

  //https://www.catv-jcta.jp/search/detail/10110078
  //蕨ケーブルビジョン(株)
  //埼玉県 蕨市
  "warabi.ne.jp": ["110010"],

  //https://www.wbs.ne.jp/topic/move/#1
  "wbs.ne.jp": ["22"],

  //https://www.catv-jcta.jp/search/detail/10110351
  //姫路ケーブルテレビ(株)
  //兵庫県 姫路市  加西市  宍粟市  たつの市  太子町  上郡町  佐用町
  "winknet.ne.jp": ["280010"],

  //https://www.catv-jcta.jp/search/detail/10112056
  //ゆずの里ケーブルテレビ(株)
  //埼玉県 毛呂山町
  "yuzu-tv.ne.jp": ["110010"],

  //https://ja.wikipedia.org/wiki/ZTV#%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%82%A8%E3%83%AA%E3%82%A2
  //ZTV
  //三重県 津市 松阪市 亀山市 尾鷲市 北牟婁郡紀北町 熊野市 南牟婁郡御浜町 紀宝町 伊勢市 鳥羽市 志摩市 度会郡玉城町 度会町 南伊勢町
  //滋賀県 彦根市 長浜市 米原市 高島市 大津市 草津市 守山市 栗東市 野洲市 湖南市 近江八幡市 蒲生郡竜王町
  //和歌山県 新宮市 田辺市 東牟婁郡串本町 那智勝浦町 太地町 古座川町 北山村 日高郡日高町 由良町 日高川町 有田郡広川町
  //京都府 京都市西京区 亀岡市 船井郡京丹波町
  "ztv.ne.jp": [
    "240010",
    "240020",
    "250020",
    "250010",
    "300020",
    "300010",
    "260010",
  ],

  //https://www.catv-jcta.jp/search/detail/10110357
  //(株)サイバーリンクス
  //和歌山県 田辺市
  "aikis.or.jp": ["300010"],

  //https://www.catv-jcta.jp/search/detail/10110057
  //佐野ケーブルテレビ(株)
  //栃木県 佐野市
  "sctv.jp": ["090010"],

  //https://www.catv-jcta.jp/search/detail/10110160
  //(株)上野原ブロードバンドコミュニケーションズ
  //山梨県 上野原市
  "ubcnet.jp": ["190020"],

  //https://www.aitech.ac.jp/
  // 愛知工業大学
  // 愛知県名古屋市/豊田市
  "aitech.ac.jp": ["230010", "230020"],

  //dendai.ac.jp
  //東京電機大学
  //東京都足立区,埼玉県比企郡鳩山町,千葉県印西市
  "dendai.ac.jp": ["130010", "110020", "120010"],

  //geidai.ac.jp
  //東京芸術大学
  //東京都台東区,東京都足立区,茨城県取手市,神奈川県横浜市中区
  "geidai.ac.jp": ["130010", "080020", "140010"],

  //hiroshima-u.ac.jp
  //広島大学
  //広島県東広島市,広島市南区,広島市中区
  "hiroshima-u.ac.jp": ["340010"],

  //jaist.ac.jp
  //北陸先端科学技術大学院大学
  //石川県能美市,石川県金沢市,東京都港区
  "jaist.ac.jp": ["170010", "130010"],

  //kanto-gakuin.ac.jp
  //関東学院大学
  //神奈川県横浜市
  "kanto-gakuin.ac.jp": ["140010"],

  //keio.ac.jp
  //慶應義塾大学
  //東京都,神奈川県横浜市,神奈川県藤沢市,埼玉県さいたま市,神奈川県川崎市,山形県鶴岡市,大阪市
  "keio.ac.jp": ["130010", "140010", "110010", "270000", "060030"],

  //kyoto-seika.ac.jp
  //京都精華大学
  //京都府京都市
  "kyoto-seika.ac.jp": ["260010"],

  //nit.ac.jp
  //日本工業大学
  //埼玉県南埼玉郡宮代町
  "nit.ac.jp": ["110010"],

  //numazu-ct.ac.jp
  //沼津工業高等専門学校
  //静岡県沼津市
  "numazu-ct.ac.jp": ["220030"],

  //oit.ac.jp
  //大阪工業大学
  //大阪府大阪市
  "oit.ac.jp": ["270000"],

  //wakayama-u.ac.jp
  //和歌山大学
  //和歌山県和歌山市
  "wakayama-u.ac.jp": ["300010"],

  //yamanashi.ac.jp
  //山梨大学
  //山梨県甲府市,中央市
  "yamanashi.ac.jp": ["190010"],

  //ctc.ad.jp
  //中部テレコミュニケーション
  //愛知,岐阜,三重,静岡,長野
  "ctc.ad.jp": ["23", "21", "24", "22", "20"],

  //extride.ad.jp
  //エクストライド
  //熊本県人吉市
  "extride.ad.jp": ["430040"],

  //https://bb-niigata.jp
  //BB.にいがた
  //新潟
  "bb-niigata.jp": ["15"],

  //ix1.co.jp
  //株式会社エックス・チェンジ
  //新潟っぽい
  "ix1.co.jp": ["15"],

  //dsn.jp
  //オプテージらしい
  //一旦EO光と同じエリアにしておく
  "dsn.jp": ["25", "26", "27", "28", "29", "30"],

  //jcom系
  //ホスト名的に関東近辺だと思われる
  "j-cnet.jp": ["10", "11", "12", "13", "14"],

  //https://kapi-q.jp/
  //カピバラクオリティ
  //岡山県倉敷市
  "kapi-q.jp": ["330010"],

  //https://www.catv-jcta.jp/search/detail/10110510
  //宮古テレビ(株)
  //沖縄県宮古島市  多良間村
  "miyako-ma.jp": ["473000"],

  //https://www.catv-jcta.jp/search/detail/10112084
  //東白川ＣＡＴＶ（東白川村）
  //岐阜県東白川村
  "50913.ne.jp": ["210010"],

  //http://y-hikari.yutopia.or.jp/
  //特定非営利活動法人ゆーとぴあネット
  "akita-uruwashi.ne.jp": ["05"],

  //https://www.avis.ne.jp/
  //https://www.avis.ne.jp/direct/con_enter_broadband.html
  //長野市,上田市 ,大町市
  "avis.ne.jp": ["200010", "200020"],

  //オープン埼玉ネットワーク
  "cablenet.ne.jp": ["11"],

  //https://www.catv-jcta.jp/search/detail/10110293
  //(株)ケーブルテレビ若狭小浜
  //福井県小浜市
  "cho.ne.jp": ["180020"],

  //http://www.dokidoki.ne.jp/
  //マジカルサイト・インターネットサービス dokidoki!
  //愛媛周辺らしい
  "dokidoki.ne.jp": ["38"],

  //https://www.editnet.ad.jp/services/
  //EditNet
  //東京周辺
  "edit.ne.jp": ["130010"],

  //https://www.catv-jcta.jp/search/detail/10110158
  //富士川シーエーティーヴィ(株)
  //山梨県南アルプス市  市川三郷町  富士川町
  "fb-net.ne.jp": ["190010"],

  //https://www.harenet.ad.jp/company
  //晴れの国ネット株式会社
  //岡山周辺
  "harenet.ne.jp": ["33"],

  //https://hikari-net.ne.jp/%e3%80%8c%e3%81%bf%e3%81%be%e3%81%ad%e3%81%a3%e3%81%a8%e3%80%8d%e3%82%a4%e3%83%b3%e3%82%bf%e3%83%bc%e3%83%8d%e3%83%83%e3%83%88%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b9/
  //みまねっと/株式会社光ネット
  //美馬市
  "hikari-net.ne.jp": ["360010"],

  //https://www.catv-jcta.jp/search/detail/10110012
  //(株)八戸テレビ放送
  //青森県八戸市  南部町
  "htv-net.ne.jp": ["020030"],

  //https://www.jet.ne.jp/jet-hikari/
  //ジェットインターネット株式会社
  //宮城県仙南(白石市、角田市、蔵王町、七ヶ宿町、大河原町、村田町、柴田町、川崎町、丸森町)
  "jet.ne.jp": ["040020", "040010"],

  //https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%82%A4%E3%82%B3%E3%83%A0%E9%8E%8C%E5%80%89
  //神奈川県鎌倉市、逗子市
  "kamakuranet.ne.jp": ["140010"],

  //https://www.catv-jcta.jp/search/detail/10110153
  //峡東ケーブルネット(株)
  //山梨県山梨市  甲州市
  "kcnet.ne.jp": ["190010"],

  //https://www.keihanna-plaza.co.jp/
  //けいはんなプラザ独自ネットワーク?
  "keihanna.ne.jp": ["260010"],

  //https://www.catv-jcta.jp/search/detail/10112058
  //エルシーブイ(株)
  //長野県岡谷市  諏訪市  茅野市  塩尻市  下諏訪町  富士見町  原村  辰野町
  "lcv.ne.jp": ["200020", "200030"],

  //https://www.catv-jcta.jp/search/detail/10110222
  //(株)御前崎ケーブルテレビ
  //静岡県御前崎市
  "maotv.ne.jp": ["220040"],

  //https://www.mto.ne.jp/
  //鏡野町有線テレビ
  //岡山県鏡野町
  "mto.ne.jp": ["330020"],

  //https://www.nsk.ad.jp/
  //株式会社ネスク
  //富山、石川
  "nsk.ne.jp": ["16", "17"],

  //https://www.catv-jcta.jp/search/detail/10112101
  //白根ケーブルネットワーク(株)
  //山梨県南アルプス市
  "nus.ne.jp": ["190010"],

  //https://corp.synapse.jp/
  //株式会社シナプス
  "synapse.ne.jp": ["46"],

  //https://tam.ne.jp/
  //NTT西のみ
  "tam.ne.jp": 西日本,

  //https://ja.wikipedia.org/wiki/%E3%82%B8%E3%82%A7%E3%82%A4%E3%82%B3%E3%83%A0%E5%8D%97%E6%A8%AA%E6%B5%9C
  //ttmy.ne.jp
  //神奈川県横浜市金沢区、港南区、栄区、戸塚区
  "ttmy.ne.jp": ["140010"],

  //https://www.cbbs.jp/
  //CBBS株式会社
  "yamasemi.ne.jp": ["340020"],

  //https://www.catv-jcta.jp/search/detail/10110277
  //(株)新川インフォメーションセンター
  //富山県魚津市
  "nice-tv.jp": ["160010"],

  //https://www.global-netcore.jp/
  //新潟近辺っぽい
  "nplus-net.jp": ["15"],

  //https://www.janis.jp/
  //長野
  "janis.or.jp": ["20"],

  //https://www.mitene.co.jp/network/
  //ミテネインターネット株式会社
  //福井っぽい?
  "mitene.or.jp": ["18"],

  //https://www.phoenix-c.or.jp/service/phoenix-hikari/
  //フェニックスコミュニケーションズ株式会社
  //東日本
  "rppp.jp": 東日本,

  //https://www.catv-jcta.jp/search/detail/10110471
  //九州テレ・コミュニケーションズ(株)
  //福岡県筑紫野市  春日市  大野城市  太宰府市  那珂川市  宇美町  志免町  須恵町  粕屋町
  //長崎県佐世保市  佐々町
  "tvs12.jp": ["400010", "420020"],

  //https://www.unnan-yume.net/
  //雲南市・飯南町事務組合
  //島根県雲南市  飯南町
  "yoitoko.jp": ["320010"],
} satisfies Record<string, GeoPosSuggestion[] | undefined> as Record<
  string,
  GeoPosSuggestion[] | undefined
>;
