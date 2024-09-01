import { ForecastResponse, Weather } from '../services/endpoints/weather/types';
import convertUnixDate from './convertUnixDate';

export type DailyForecastItem = {
  date: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  weather: Weather;
};

export type ProcessedForecastData = DailyForecastItem[];

const processForecastData = (data: ForecastResponse): ProcessedForecastData => {
  const dailyForecastMap: Record<string, DailyForecastItem> = {};

  data.list.forEach((item) => {
    const dayKey = convertUnixDate(item.dt);

    if (!dailyForecastMap[dayKey]) {
      dailyForecastMap[dayKey] = {
        date: dayKey,
        temp: item.main.temp,
        tempMin: item.main.temp,
        tempMax: item.main.temp,
        weather: item.weather[0],
      };
    } else {
      dailyForecastMap[dayKey].tempMin = Math.min(dailyForecastMap[dayKey].tempMin, item.main.temp);
      dailyForecastMap[dayKey].tempMax = Math.max(dailyForecastMap[dayKey].tempMax, item.main.temp);
    }
  });

  return Object.values(dailyForecastMap);
};

export default processForecastData;
