import { Coordinates, Weather } from '../../../types';

type Clouds = {
  all: number;
};

type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
};

type Sys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

type Wind = {
  speed: number;
  deg: number;
  gust?: number;
};

export type WeatherResponse = {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coordinates;
  dt: number;
  id: number;
  main: MainWeather;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: Wind;
};

export type ForecastItem = {
  pop: number;
} & Omit<WeatherResponse, 'base' | 'id' | 'name' | 'cod'>;

export type ForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
};
