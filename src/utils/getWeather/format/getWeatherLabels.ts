import {WeatherLabels} from "@/utils/getWeather/format/weather";
import {Lang} from "@/types/lang";

export const getWeatherIconId = (weatherCode: string) => {
  return WeatherLabels[weatherCode].icon;
}

export const getWeatherLabel = (weatherCode: string, lang: Lang) => {
  return lang === "JA" ? WeatherLabels[weatherCode].weather : WeatherLabels[weatherCode].weatherEn;
}
