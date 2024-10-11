import {ZWeatherOverviewResponse} from "@/types/weather";
import {getWeatherId} from "@/utils/getWeatherId";
import {sleep} from "@/utils/sleep";

type ResponseItem = {
  data: Promise<{
    data: string,
    source: string,
  }>,
  fetchedAt: number,
  isCached?: boolean
}

const cache = {} as Record<string, ResponseItem>;
const ttl = 1000 * 60 * 10;

export const getOverview = (geoId: string) => {
  if (geoId.startsWith("loc:")) {
    return {
      data: new Promise<{data: string, source: string}>(async(resolve)=>{
        resolve({
          data: "Overview is not available for this location.",
          source: "fallback"
        });
      }),
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

const getOverviewInternal = async(weatherId: string, retryCount = 0): Promise<{data: string, source: string}> => {
  try{
    const source = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${weatherId}.json`;
    const response = await fetch(source);
    const json = await response.json();
    const data = ZWeatherOverviewResponse.parse(json);
    return {
      data: data.text.replace(/(\r\n|\r|\n)+?/g,"\n").split("\n").map((line)=>line.trim()).filter(Boolean).join("\n"),
      source,
    };
  }catch (e) {
    console.error(e);
    if (retryCount < 3) {
      await sleep(100);
      return getOverviewInternal(weatherId, retryCount + 1);
    }
    return {
      data: "Failed to fetch overview data.",
      source: "fallback"
    };
  }
}
