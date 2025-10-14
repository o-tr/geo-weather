import type { Lang } from "@/types/lang";
import { WeatherLabels } from "@/utils/getWeather/format/weather";

export const getWeatherIconId = (weatherCode: string) => {
  return WeatherLabels[weatherCode].icon;
};

export const getWeatherLabel = (weatherCode: string, lang: Lang) => {
  return lang === "JA"
    ? WeatherLabels[weatherCode].weather
    : WeatherLabels[weatherCode].weatherEn;
};
