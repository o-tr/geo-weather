import { z } from "zod";

const ThreeDayForecastTimeSeriesWeather = z.object({
  timeDefines: z.array(z.string()),
  areas: z.array(
    z.object({
      area: z.object({
        name: z.string(),
        code: z.string(),
      }),
      weatherCodes: z.array(z.string()),
      weathers: z.optional(z.array(z.string())),
      winds: z.optional(z.array(z.string())),
      waves: z.optional(z.array(z.string())),
    }),
  ),
});

const ThreeDayForecastTimeSeriesPops = z.object({
  timeDefines: z.array(z.string()),
  areas: z.array(
    z.object({
      area: z.object({
        name: z.string(),
        code: z.string(),
      }),
      pops: z.array(z.string()),
    }),
  ),
});

const ThreeDayForecastTimeSeriesTemps = z.object({
  timeDefines: z.array(z.string()),
  areas: z.array(
    z.object({
      area: z.object({
        name: z.string(),
        code: z.string(),
      }),
      temps: z.array(z.string()),
    }),
  ),
});

const ThreeDayForecast = z.object({
  publishingOffice: z.string(),
  reportDatetime: z.string(),
  timeSeries: z.tuple([
    ThreeDayForecastTimeSeriesWeather,
    ThreeDayForecastTimeSeriesPops,
    ThreeDayForecastTimeSeriesTemps,
  ]),
});

const OneWeekForecastTimeSeriesWeather = z.object({
  timeDefines: z.array(z.string()),
  areas: z.array(
    z.object({
      area: z.object({
        name: z.string(),
        code: z.string(),
      }),
      weatherCodes: z.array(z.string()),
      pops: z.array(z.string()),
      reliabilities: z.array(z.string()),
    }),
  ),
});

const OneWeekForecastTimeSeriesTemps = z.object({
  timeDefines: z.array(z.string()),
  areas: z.array(
    z.object({
      area: z.object({
        name: z.string(),
        code: z.string(),
      }),
      tempsMin: z.array(z.string()),
      tempsMinUpper: z.optional(z.array(z.string())),
      tempsMinLower: z.optional(z.array(z.string())),
      tempsMax: z.array(z.string()),
      tempsMaxUpper: z.optional(z.array(z.string())),
      tempsMaxLower: z.optional(z.array(z.string())),
    }),
  ),
});

const OneWeekForecast = z.object({
  publishingOffice: z.string(),
  reportDatetime: z.string(),
  timeSeries: z.tuple([
    OneWeekForecastTimeSeriesWeather,
    OneWeekForecastTimeSeriesTemps,
  ]),
  tempAverage: z.optional(
    z.object({
      areas: z.array(
        z.object({
          area: z.object({
            name: z.string(),
            code: z.string(),
          }),
          min: z.string(),
          max: z.string(),
        }),
      ),
    }),
  ),
  precipAverage: z.optional(
    z.object({
      areas: z.array(
        z.object({
          area: z.object({
            name: z.string(),
            code: z.string(),
          }),
          min: z.string(),
          max: z.string(),
        }),
      ),
    }),
  ),
});

export const ZWeatherResponse = z.tuple([ThreeDayForecast, OneWeekForecast]);

export type WeatherResponse = z.infer<typeof ZWeatherResponse>;

export const ZWeatherOverviewResponse = z.object({
  publishingOffice: z.string(),
  reportDatetime: z.string(),
  targetArea: z.string(),
  headlineText: z.string(),
  text: z.string(),
});

export type WeatherOverviewResponse = z.infer<typeof ZWeatherOverviewResponse>;

export type ForecastItem = {
  date: string;
  icon: string;
  weather: string;
  pop: string;
  tempMin: string;
  tempMax: string;
};

export type FormattedWeather = {
  weather: ForecastItem[];
  publishingOffice: string;
  reportDatetime: string;
  regionName: string;
};
