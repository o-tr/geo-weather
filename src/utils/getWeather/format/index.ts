import {ForecastItem, FormattedWeather, WeatherResponse} from "@/types/weather";
import {geoPosName} from "@/const/geo-pos-list";
import {getArea} from "./getArea";
import {getFormattedDate} from "./getFormattedDate";
import {getWeatherIconId, getWeatherLabel} from "./getWeatherLabels";


export const formatWeather = (forecast: WeatherResponse, geoPosId: string): FormattedWeather=> {
  const [threeDays, oneWeek] = forecast;

  const [threeDaysForecast, threeDaysPop, threeDaysTemp] = threeDays.timeSeries;

  const threeDaysForecastData = {} as Record<string, {
    icon: string;
    weather: string;
  }>;
  {
    const area = getArea(threeDaysForecast.areas, geoPosId);
    for (let i = 0; i < threeDaysForecast.timeDefines.length; i++) {
      const dateStr = getFormattedDate(threeDaysForecast.timeDefines[i]).str;
      const icon = getWeatherIconId(area.weatherCodes[i]);
      const weather = getWeatherLabel(area.weatherCodes[i]);
      threeDaysForecastData[dateStr] = {
        icon,
        weather
      }
    }
  }

  const threeDaysPopData = {} as Record<string, string[]>;
  {
    const area = getArea(threeDaysPop.areas, geoPosId);
    for (let i = 0; i < threeDaysPop.timeDefines.length; i++) {
      const {str: dateStr, hour} = getFormattedDate(threeDaysPop.timeDefines[i]);
      if (!threeDaysPopData[dateStr]) {
        threeDaysPopData[dateStr] = ["-", "-", "-", "-"];
      }
      threeDaysPopData[dateStr][hour / 6] = area.pops[i];
    }
  }

  const threeDaysTempData = {} as Record<string, {
    min?: string;
    max?: string;
  }>;
  {
    const area = getArea(threeDaysTemp.areas, geoPosId);
    for (let i = 0; i < threeDaysTemp.timeDefines.length; i++) {
      const dateStr = getFormattedDate(threeDaysTemp.timeDefines[i]).str;
      const value = area.temps[i];
      if (!threeDaysTempData[dateStr]) {
        threeDaysTempData[dateStr] = {
          min: value
        };
      } else {
        threeDaysTempData[dateStr].max = value;
      }
    }
  }

  const [oneWeekForecast, oneWeekTemp] = oneWeek.timeSeries;

  const oneWeekForecastData = {} as Record<string, {
    icon: string;
    weather: string;
    pop: string;
  }>;
  {
    const area = getArea(oneWeekForecast.areas, geoPosId);
    for (let i = 0; i < oneWeekForecast.timeDefines.length; i++) {
      const dateStr = getFormattedDate(oneWeekForecast.timeDefines[i]).str;
      const icon = getWeatherIconId(area.weatherCodes[i]);
      const weather = getWeatherLabel(area.weatherCodes[i]);
      const pop = area.pops[i];
      oneWeekForecastData[dateStr] = {
        icon,
        weather,
        pop
      }
    }
  }

  const oneWeekTempData = {} as Record<string, {
    min?: string;
    max?: string;
  }>;
  {
    const area = getArea(oneWeekTemp.areas, geoPosId);
    for (let i = 0; i < oneWeekTemp.timeDefines.length; i++) {
      const dateStr = getFormattedDate(oneWeekTemp.timeDefines[i]).str;
      const min = area.tempsMin[i];
      const max = area.tempsMax[i];
      oneWeekTempData[dateStr] = {
        min,
        max
      }
    }
  }

  const result = {} as Record<string, Partial<ForecastItem>>;
  for (const [date, forecastData] of Object.entries(threeDaysForecastData)) {
    result[date] = {
      date,
      icon: forecastData.icon,
      weather: forecastData.weather,
      ...result[date]??{}
    };
  }

  for (const [date, forecastData] of Object.entries(threeDaysPopData)) {
    result[date] = {
      date,
      pop: forecastData.join("/"),
      ...result[date]??{}
    };
  }

  for (const [date, forecastData] of Object.entries(threeDaysTempData)) {
    result[date] = {
      date,
      tempMin: forecastData.min,
      tempMax: forecastData.max,
      ...result[date]??{}
    };
  }

  for (const [date, forecastData] of Object.entries(oneWeekForecastData)) {
    result[date] = {
      date,
      icon: forecastData.icon,
      weather: forecastData.weather,
      pop: forecastData.pop,
      ...result[date]
    };
  }

  for (const [date, forecastData] of Object.entries(oneWeekTempData)) {
    result[date] = {
      date,
      tempMin: forecastData.min,
      tempMax: forecastData.max,
      ...result[date]
    };
  }

  for (const [, value] of Object.entries(result)) {
    if (!value.icon) {
      value.icon = "-";
    }
    if (!value.weather) {
      value.weather = "-";
    }
    if (!value.pop) {
      value.pop = "-";
    }
    if (!value.tempMin) {
      value.tempMin = "-";
    }
    if (!value.tempMax) {
      value.tempMax = "-";
    }
  }

  const today = new Date();
  today.setHours(0,0,0,0);
  const weather =(Object.values(result) as ForecastItem[]).sort((a, b) => new Date(a.date) >= new Date(b.date) ? 1 : -1).filter((v)=>new Date(v.date) >= today);

  const todayWeather = weather[0];
  if (todayWeather?.tempMax === todayWeather.tempMin) {
    todayWeather.tempMin = "-";
  }

  return {
    weather: weather,
    publishingOffice: threeDays.publishingOffice,
    reportDatetime: threeDays.reportDatetime,
    regionName: geoPosName[geoPosId],
  };
};
