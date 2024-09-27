import {WeatherLabels} from "@/utils/getWeather/format/weather";

export const getWeatherIconId = (weatherCode: string) => {
  return WeatherLabels[weatherCode].icon;
}

export const getWeatherLabel = (weatherCode: string) => {
  return WeatherLabels[weatherCode].weather;
}
