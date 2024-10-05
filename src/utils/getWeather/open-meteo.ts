import { fetchWeatherApi } from 'openmeteo';
import {ForecastItem, FormattedWeather} from "@/types/weather";
import {getFormattedDate} from "@/utils/getWeather/format/getFormattedDate";
import {getJMAfromWMO} from "@/utils/getJMAfromWMO";
import {getWeatherLabel} from "@/utils/getWeather/format/getWeatherLabels";

const ApiEndpoint = process.env.OPEN_METEO_API_ENDPOINT??"https://api.open-meteo.com/v1/forecast";

export const getOpenMeteoWeather = async (geoId: string): Promise<{data: FormattedWeather, source: string}> => {
  const match = geoId.match(/^loc:(?<lat>-?[0-9.]+),(?<long>-?[0-9.]+):(?<tz>.*?):(?<region>.*?):(?<city>.*?)$/);
  if (!match || !match.groups) {
    throw new Error("Invalid geoId");
  }
  const params = {
    "latitude": match.groups.lat,
    "longitude": match.groups.long,
    "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "precipitation_probability_max"],
    "timezone": match.groups.tz,
  };
  const responses = await fetchWeatherApi(ApiEndpoint, params);

  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const daily = response.daily()!;

  const weatherData = {
    daily: {
      time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
        (t) => new Date((t + utcOffsetSeconds) * 1000)
      ),
      weatherCode: daily.variables(0)!.valuesArray()!,
      temperature2mMax: daily.variables(1)!.valuesArray()!,
      temperature2mMin: daily.variables(2)!.valuesArray()!,
      precipitationProbabilityMax: daily.variables(3)!.valuesArray()!,
    },

  };

  const weather:ForecastItem[] = [];

  for (let i = 0; i < weatherData.daily.time.length; i++) {
    const pop = weatherData.daily.precipitationProbabilityMax[i];
    const weatherCode = getJMAfromWMO(weatherData.daily.weatherCode[i]);
    weather.push({
      date: getFormattedDate(weatherData.daily.time[i]).str,
      icon: `${weatherCode}`,
      weather: `${getWeatherLabel(`${weatherCode}`, "EN")}`,
      tempMin: `${Math.round(weatherData.daily.temperature2mMin[i])}`,
      tempMax: `${Math.round(weatherData.daily.temperature2mMax[i])}`,
      pop: pop===undefined||Number.isNaN(pop) ? "-" : `${pop}%`,
    });
  }

  return {
    data: {
      regionName: `${match.groups.region} ${match.groups.city}`,
      reportDatetime: new Date().toISOString(),
      publishingOffice: "Open-Meteo.com",
      weather,
    },
    source: "local open-meteo API",
  }
}
