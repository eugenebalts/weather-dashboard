import { ForecastResponse, WeatherResponse } from '../../../services/endpoints/weather/types';

export type GeolocationMetadata = {
  fromGeolocation: boolean;
};

type StateWithAsyncHandlers = {
  isLoading: boolean;
  error: string | null;
};

export type WeatherState = {
  currentWeather: {
    data: WeatherResponse | null;
    isLoading: boolean;
    error: string | null;
  } & GeolocationMetadata &
    StateWithAsyncHandlers;
  forecast: {
    data: ForecastResponse | null;
  } & StateWithAsyncHandlers;
};
