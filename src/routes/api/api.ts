import { Hono } from "hono";
import { getRequestIp } from "@/utils/getRequestIp";
import { getGeoPosId } from "@/utils/getGeoPosId";
import { getWeather } from "@/utils/getWeather";
import { getOverview } from "@/utils/getOverview";
import { prisma } from "@/lib/prisma";

export const registerApiIndex = (app: Hono) => {
  app.get("/api", async (c) => {
    const ip = getRequestIp(c);
    const { source, geoId: geoPosId } = await getGeoPosId(ip, c);
    try {
      const weather = getWeather(geoPosId);
      const overviewItem = getOverview(geoPosId);
      const [forecast, overview, userPreferences] = await Promise.all([
        await weather.data,
        await overviewItem.data,
        await getPreferences(ip, geoPosId),
      ]);

      return c.json({
        weather: forecast.data.weather,
        publishingOffice: forecast.data.publishingOffice,
        reportDatetime: forecast.data.reportDatetime,
        region: forecast.data.regionName,
        overview: overview.data,
        geoPosId,
        ...userPreferences,
        metadata: {
          forecast: {
            isCached: weather.isCached,
            fetchedAt: weather.fetchedAt,
            source: forecast.source,
          },
          overview: {
            isCached: overviewItem.isCached,
            fetchedAt: overviewItem.fetchedAt,
            source: overview.source,
          },
          geoSource: source,
        },
        status: "success",
      });
    } catch (e) {
      console.error(e);
      return c.json({
        status: "failed",
        error: e,
        geoPosId: geoPosId,
      });
    }
  });
};

const getPreferences = async (ip: string, geoPosId: string) => {
  try {
    return prisma.userPreferences.findUnique({
      where: { ip },
    });
  } catch (e) {
    console.error(e);
    return {
      hideLocation: false,
      locale: geoPosId.startsWith("loc:") ? "en" : "ja",
      autoUpdateInterval: 21600, // 6時間
    };
  }
};
