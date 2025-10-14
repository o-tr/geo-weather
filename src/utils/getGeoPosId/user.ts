import { prisma } from "@/lib/prisma";

const USER_DEFINED_GEO_POS_EXPIRE = 1000 * 60 * 60 * 24 * 7 * 4;

export const geoGeoPosIdCached = async (
  ip: string,
): Promise<{
  geoId: string;
  source: string;
}> => {
  const geoObj = await prisma.geoWeather.findFirst({
    where: {
      ip,
      source: "user",
    },
  });
  if (!geoObj) throw new Error("No geo data");
  if (geoObj.updatedAt.getTime() + USER_DEFINED_GEO_POS_EXPIRE < Date.now()) {
    throw new Error("Expired geo data");
  }
  if (geoObj.source === "user") {
    await prisma.geoWeather.update({
      where: {
        ip,
      },
      data: {
        updatedAt: new Date(),
      },
    });
  }
  return {
    geoId: geoObj.geoId,
    source: geoObj.source,
  };
};
