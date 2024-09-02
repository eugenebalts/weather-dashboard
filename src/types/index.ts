import { WeatherResponse } from '../services/endpoints/weather/types';

export type PropsWithWeatherData = {
  weather: WeatherResponse;
};

export type Coordinates = {
  lon: number;
  lat: number;
};

export type GeolocationMetadata = {
  fromGeolocation: boolean;
};

export type CoordinatesWithMetadata = Coordinates & GeolocationMetadata;

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type DailyForecastItem = {
  date: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  weather: Weather;
};

export type ProcessedForecastData = DailyForecastItem[];
