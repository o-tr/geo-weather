import {ZWeatherOverviewResponse} from "@/types/weather";
import {getWeatherId} from "@/utils/getWeatherId";

type ResponseItem = {
  data: Promise<{
    data: string,
    source: string,
  }>,
  fetchedAt: number,
  isCached?: boolean
}

const cache = {} as Record<string, ResponseItem>;

export const getOverview = (geoId: string) => {
  const weatherId = getWeatherId(geoId);
  if (Object.keys(cache).includes(geoId)) {
    return {
      ...cache[geoId],
      isCached: true
    };
  }
  const promise = getOverviewInternal(weatherId);
  cache[geoId] = {
    data: promise,
    fetchedAt: Date.now()
  };
  return {
    ...cache[geoId],
    isCached: false
  };
}

const getOverviewInternal = async(weatherId: string) => {
  const source = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${weatherId}.json`;
  const response = await fetch(source);
  const json = await response.json();
  const data = ZWeatherOverviewResponse.parse(json);
  return {
    data: data.text.replace(/(\r\n|\r|\n)+?/g,"\n").split("\n").map((line)=>line.trim()).filter(Boolean).join("\n"),
    source,
  };
}
