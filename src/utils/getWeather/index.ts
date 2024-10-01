import {getWeatherId} from "@/utils/getWeatherId";
import {ZWeatherResponse} from "@/types/weather";
import {FormattedWeather, formatWeather} from "@/utils/getWeather/format";

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

const getWeatherInternal = async(geoId: string, weatherId: string) => {
  const source = `https://www.jma.go.jp/bosai/forecast/data/forecast/${weatherId}.json`;
  const response = await fetch(source);
  const json = await response.json();
  const data = ZWeatherResponse.parse(json);
  return {
    data: formatWeather(data, geoId),
    source
  };
}
