import { ForecastResponse } from '../services/endpoints/weather/types';
import { DailyForecastItem, ProcessedForecastData } from '../types';
import convertUnixDate from './convertUnixDate';

const processForecastData = (data: ForecastResponse): ProcessedForecastData => {
  const dailyForecastMap: Record<string, DailyForecastItem> = {};

  data.list.forEach((item) => {
    const dayKey = convertUnixDate(item.dt);

    if (!dailyForecastMap[dayKey]) {
      dailyForecastMap[dayKey] = {
        date: dayKey,
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
