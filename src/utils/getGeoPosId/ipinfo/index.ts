import {prisma} from "@/lib/prisma";
import {resolveGeoId} from "./resolver";
import {IPInfoResponse} from "@/types/ipinfo";

const apiToken = process.env.IPINFO_API_TOKEN;
const endpoint = process.env.IPINFO_API_ENDPOINT;
const sourceName = process.env.IPINFO_API_SOURCE_NAME ?? "ipinfo";

export const getGeoPosIdIPInfo = async(ip: string):Promise<string> => {
  const geoObj = await prisma.geoWeather.findFirst({
    where:{
      ip
    }
  });
  if (geoObj) return geoObj.geoId;
  const response = await fetch(`${endpoint}/${ip}/json?token=${apiToken}`);
  const json = await response.json();
  const data = IPInfoResponse.parse(json);
  const geoId = resolveGeoId(data);
  try{
    await prisma.geoWeather.create({
      data:{
        ip,
        geoId,
        source: sourceName
      }
    });
  }catch (e){
    await prisma.geoWeather.update({
      where: {
        ip
      },
      data: {
        geoId,
        source: sourceName
      }
    })
  }
  return geoId;
}
