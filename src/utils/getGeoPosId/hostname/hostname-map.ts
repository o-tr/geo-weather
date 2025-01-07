import { GeoPosSuggestion } from "@/const/geo-pos-list";

export const hostnamePrefMapGenerator = (
  regex: RegExp | RegExp[],
  map: {
    [key: string]: GeoPosSuggestion;
  }
): ((key: string) => GeoPosSuggestion[] | undefined) => {
  return (key: string) => {
    const prefId = (() => {
      if (Array.isArray(regex)) {
        for (const r of regex) {
          const match = key.match(r);
          if (match && match[1]) {
            return match[1];
          }
        }
        return undefined;
      }
      const match = key.match(regex);
      if (match && match[1]) {
        return match[1];
      }
      return undefined;
    })();
    if (prefId && map[prefId]) {
      return [map[prefId]];
    }
    return undefined;
  };
};

export const parseOcnHostname = hostnamePrefMapGenerator(
  /\.([a-z]+)\.ocn\.ne\.jp$/,
  {
    hokkaido: "01",
    aomori: "02",
    iwate: "03",
    miyagi: "04",
    akita: "05",
    yamagata: "06",
    fukushima: "07",
    ibaraki: "08",
    tochigi: "09",
    gunma: "10",
    saitama: "11",
    chiba: "12",
    tokyo: "13",
    kanagawa: "14",
    niigata: "15",
    toyama: "16",
    ishikawa: "17",
    fukui: "18",
    yamanashi: "19",
    nagano: "20",
    gifu: "21",
    shizuoka: "22",
    aichi: "23",
    mie: "24",
    shiga: "25",
    kyoto: "26",
    osaka: "27",
    hyogo: "28",
    nara: "29",
    wakayama: "30",
    tottori: "31",
    shimane: "32",
    okayama: "33",
    hiroshima: "34",
    yamaguchi: "35",
    tokushima: "36",
    kagawa: "37",
    ehime: "38",
    kochi: "39",
    fukuoka: "40",
    saga: "41",
    nagasaki: "42",
    kumamoto: "43",
    oita: "44",
    miyazaki: "45",
    kagoshima: "46",
    okinawa: "47",
  }
);

export const parseInfowebHostname = hostnamePrefMapGenerator(
  /\.([a-z]+)\.[a-z]+\.[a-z]+\.ppp\.infoweb\.ne\.jp$/,
  {
    hkid: "01",
    spro: "01",
    aomr: "02",
    iwte: "03",
    mygi: "04",
    sndi: "04",
    akta: "05",
    ymgt: "06",
    fksm: "07",
    ibrk: "08",
    tcgi: "09",
    gnma: "10",
    sitm: "11",
    chba: "12",
    tkyo: "13",
    kngw: "14",
    atgi: "14",
    nigt: "15",
    tyma: "16",
    iskw: "17",
    fuki: "18",
    ymns: "19",
    ngno: "20",
    gifu: "21",
    szok: "22",
    yizu: "22",
    aich: "23",
    ngya: "23",
    miex: "24",
    shga: "25",
    kyto: "26",
    oska: "27",
    hygo: "28",
    nara: "29",
    wkym: "30",
    ttri: "31",
    smne: "32",
    okym: "33",
    hrsm: "34",
    ymgc: "35",
    tksm: "36",
    kgwa: "37",
    ehme: "38",
    kuch: "39",
    fkok: "40",
    saga: "41",
    ngsk: "42",
    kmmt: "43",
    oita: "44",
    myzk: "45",
    kgsm: "46",
    oknw: "47",
  }
);

export const parseMeshHostname = hostnamePrefMapGenerator(
  /\.([a-z0-9]+)\.mesh\.ad\.jp$/,
  {
    hkd: "01",
    aom: "02",
    iwa: "03",
    myg: "04",
    aki: "05",
    ygt: "06",
    fks: "07",
    iba: "08",
    tcg: "09",
    gnm: "10",
    stm: "11",
    chb: "12",
    tky: "13",
    tk: "13",
    tk0: "13",
    tk1: "13",
    tk2: "13",
    tk3: "13",
    kng: "14",
    ngt: "15",
    tym: "16",
    isk: "17",
    fki: "18",
    ymn: "19",
    ngn: "20",
    gif: "21",
    szo: "22",
    aic: "23",
    mie: "24",
    sig: "25",
    kyt: "26",
    os: "27",
    osk: "27",
    os0: "27",
    hyg: "28",
    nra: "29",
    wky: "30",
    ttr: "31",
    smn: "32",
    oky: "33",
    hrs: "34",
    ygc: "35",
    tks: "36",
    kgw: "37",
    ehm: "38",
    koc: "39",
    fko: "40",
    sag: "41",
    ngs: "42",
    kmm: "43",
    oit: "44",
    myz: "45",
    kgs: "46",
    okn: "47",
  }
);

export const parseEoNetHostname = hostnamePrefMapGenerator(
  /\.([a-z]+)[0-9]+\.eonet\.ne\.jp$/,
  {
    osk: "27",
    hyg: "28",
    kyt: "26",
    shg: "25",
    nar: "29",
    wky: "30",
  }
);

export const parseHiHoHostname = hostnamePrefMapGenerator(
  /^([a-z]+)[0-9]+-p[0-9]+\.hi-ho\.ne\.jp$/,
  {
    hkd: "01",
    amr: "02",
    iwt: "03",
    myg: "04",
    akt: "05",
    ymt: "06",
    fks: "07",
    ibr: "08",
    tcg: "09",
    gmm: "10",
    stm: "11",
    chb: "12",
    tky: "13",
    kng: "14",
    ngt: "15",
    tym: "16",
    isk: "17",
    fki: "18",
    ymn: "19",
    ngn: "20",
    gif: "21",
    szk: "22",
    aic: "23",
    mie: "24",
    shg: "25",
    kyt: "26",
    osk: "27",
    hyg: "28",
    nar: "29",
    wky: "30",
    ttr: "31",
    smn: "32",
    oky: "33",
    hrs: "34",
    ymc: "35",
    tks: "36",
    kgw: "37",
    ehm: "38",
    kch: "39",
    fkk: "40",
    sag: "41",
    ngs: "42",
    kmm: "43",
    oit: "44",
    myz: "45",
    kgs: "46",
    okn: "47",
  }
);

export const parseOdnHostname = hostnamePrefMapGenerator(
  /^([a-z]{3}).*\.ppp[0-9]+\.odn\.(?:ad|ne)\.jp/,
  {
    sod: "01",
    oki: "02",
    mrn: "03",
    aob: "04",
    nkd: "05",
    imz: "06",
    hnz: "07",
    aka: "08",
    hrd: "09",
    kkr: "10",
    skn: "11",
    fna: "12",
    ofs: "13",
    hdo: "14",
    ngn: "15",
    tyn: "16",
    knn: "17",
    fkn: "18",
    kfn: "19",
    syd: "20",
    sdd: "22",
    ssj: "23",
    ykm: "24",
    otu: "25",
    kyn: "26",
    nwt: "27",
    kbm: "28",
    daj: "29",
    wkn: "30",
    ttn: "31",
    smn: "32",
    imm: "33",
    nih: "34",
    ygn: "35",
    tkn: "36",
    tmn: "37",
    myn: "38",
    kcm: "39",
    fkc: "40",
    tgs: "41",
    sco: "42",
    oby: "43",
    omc: "44",
    mzn: "45",
    kmi: "46",
    yrm: "47",
  }
);

export const parseSoNetHostname = hostnamePrefMapGenerator(
  /\.([a-z\-]{4})[a-z0-9]+\.ap\.so-net\.ne\.jp$/,
  {
    hkid: "01",
    sppr: "01",
    aomr: "02",
    iwat: "03",
    miyg: "04",
    sndi: "04",
    akit: "05",
    ymgt: "06",
    fksm: "07",
    ibrk: "08",
    tocg: "09",
    gunm: "10",
    sitm: "11",
    uraw: "11",
    chib: "12",
    toky: "13",
    tkyo: "13",
    ntky: "13",
    kngw: "14",
    ykhm: "14",
    nigt: "15",
    toym: "16",
    iskw: "17",
    fuki: "18",
    ymns: "19",
    ngno: "20",
    gifu: "21",
    szok: "22",
    aici: "23",
    ngya: "23",
    "mie-": "24",
    siga: "25",
    kyot: "26",
    osak: "27",
    hyog: "28",
    kobe: "28",
    nara: "29",
    wkym: "30",
    totr: "31",
    simn: "32",
    okym: "33",
    hrsm: "34",
    ymgc: "35",
    tksm: "36",
    kagw: "37",
    ehim: "38",
    koci: "39",
    fkok: "40",
    saga: "41",
    ngsk: "42",
    kmmt: "43",
    oita: "44",
    myzk: "45",
    kgsm: "46",
    oknw: "47",
  }
);

export const parseCommufaHostname = hostnamePrefMapGenerator(
  /\.([a-z0-9]+)\.commufa\.jp$/,
  {
    aichieast1: "23",
    aichiwest1: "23",
    nagoya1: "23",
    gifu1: "21",
    mie1: "24",
    shizuoka1: "22",
  }
);

export const parseNuroHostname = hostnamePrefMapGenerator(
  /\.([a-z]{4})[0-9]{3}\.ap\.nuro\.jp$/,
  {
    hkdm: "01",
    mygp: "04",
    ygtp: "06",
    fksp: "07",
    ibra: "08",
    tcga: "09",
    gnma: "10",
    stma: "11",
    stmb: "11",
    chbd: "12",
    tkyc: "13",
    tkye: "13",
    knge: "14",
    gifg: "21",
    szoh: "22",
    aicf: "23",
    mieg: "24",
    sigj: "25",
    kytj: "26",
    oski: "27",
    hygi: "28",
    hygk: "28",
    narj: "29",
    okyn: "33",
    hrsn: "34",
    fkol: "40",
    sagl: "41",
  }
);

export const parseVectantHostname = hostnamePrefMapGenerator(
  [
    /\.([a-z]+)\.(?:fdn|otk)\.vectant\.ne\.jp$/,
    /\.[a-z]([a-z]+)fl\d+\.vectant\.ne\.jp$/,
  ],
  {
    aomori: "02",
    miyagi: "04",
    saitama: "11",
    chiba: "12",
    tokyo: "13",
    kanagawa: "14",
    nagano: "20",
    shizuoka: "22",
    aichi: "23",
    kyoto: "26",
    osaka: "27",
    hyogo: "28",
    hiroshima: "34",
    fukuoka: "40",
  }
);

export const parseGmoIspHostname = hostnamePrefMapGenerator(
  /\.([a-z]+)\.ap\.gmo-isp\.jp$/,
  {
    aichi: "23",
    chiba: "12",
    fukuoka: "40",
    hyogo: "28",
    kanagawa: "14",
    kyoto: "26",
    miyagi: "04",
    nagano: "20",
    osaka: "27",
    saitama: "11",
    shizuoka: "22",
    tokyo: "13",
  }
);

export const parseAtNiftyHostname = hostnamePrefMapGenerator(
  /\.([a-z]+)\.kotei\.ppp\.nifty\.ne\.jp$/,
  {
    hkid: "01",
  }
);

export const parseSakuraHostname = hostnamePrefMapGenerator(
  /([a-z]{2})\d+-.*\.vs\.sakura\.ne\.jp$/,
  {
    ik: "016010",
    os: "270000",
    tk: "130010",
  }
);

export const parseCoralNetHostname = hostnamePrefMapGenerator(
  /\.[a-z]{2}([a-z]+)\.coralnet\.or\.jp$/,
  {
    toyama: "16",
    oyama: "16",
    kanazawa: "17",
    anazawa: "17",
  }
);

export const parsePlalaHostname = (hostname: string) => {
  const plala = hostname.match(/a0(\d\d)\.ap\.plala\.or\.jp$/);
  if (plala && plala[1]) {
    return [plala[1] as GeoPosSuggestion];
  }
  return undefined;
};

export const HostnameParserMap = {
  "plala.or.jp": parsePlalaHostname,
  "ocn.ne.jp": parseOcnHostname,
  "infoweb.ne.jp": parseInfowebHostname,
  "mesh.ad.jp": parseMeshHostname,
  "eonet.ne.jp": parseEoNetHostname,
  "hi-ho.ne.jp": parseHiHoHostname,
  "odn.ne.jp": parseOdnHostname,
  "so-net.ne.jp": parseSoNetHostname,
  "commufa.jp": parseCommufaHostname,
  "nuro.jp": parseNuroHostname,
  "vectant.ne.jp": parseVectantHostname,
  "gmo-isp.jp": parseGmoIspHostname,
  "nifty.ne.jp": parseAtNiftyHostname,
  "sakura.ne.jp": parseSakuraHostname,
  "coralnet.or.jp": parseCoralNetHostname,
} as Record<string, (hostname: string) => GeoPosSuggestion[] | undefined>;
