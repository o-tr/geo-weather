import {getWeatherId} from "@/utils/getWeatherId";
import {FormattedWeather, ZWeatherResponse} from "@/types/weather";
import {formatWeather} from "@/utils/getWeather/format";
import {getOpenMeteoWeather} from "@/utils/getWeather/open-meteo";
import {sleep} from "@/utils/sleep";

type ResponseItem = {
  data: Promise<{
    data: FormattedWeather,
    source: string,
  }>,
  fetchedAt: number,
  isCached?: boolean
}

const cache = {} as Record<string, ResponseItem>;
const ttl = 1000 * 60 * 10;

export const getWeather = (geoId: string): ResponseItem => {
  if (geoId.startsWith("loc:")) {
    const weather = getOpenMeteoWeather(geoId);
    return {
      data: weather,
      fetchedAt: Date.now(),
      isCached: false
    };
  }
  const weatherId = getWeatherId(geoId);
  if (Object.keys(cache).includes(geoId) && cache[geoId].fetchedAt + ttl > Date.now()) {
    return {
      ...cache[geoId],
      isCached: true
    };
  }
  const promise = getWeatherInternal(geoId, weatherId);
  cache[geoId] = {
    data: promise,
    fetchedAt: Date.now()
  };
  return {
    ...cache[geoId],
    isCached: false
  };
}

const getWeatherInternal = async(geoId: string, weatherId: string, retryCount = 0): Promise<{data: FormattedWeather, source: string}> => {
  try{
    const source = `https://www.jma.go.jp/bosai/forecast/data/forecast/${weatherId}.json`;
    const response = await fetch(source);
    const json = await response.json();
    const data = ZWeatherResponse.parse(json);
    return {
      data: formatWeather(data, geoId),
      source
    };
  }catch (e) {
    console.error(e);
    if (retryCount < 3) {
      await sleep(100);
      return getWeatherInternal(geoId, weatherId, retryCount + 1);
    }
    return {
      data: {
        weather: [],
        publishingOffice: "fallback",
        reportDatetime: "",
        regionName: "",
      },
      source: "fallback"
    }
  }
}
