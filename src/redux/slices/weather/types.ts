import { Coordinates } from '../../../services/endpoints/geocoding/types';
import { ForecastResponse, WeatherResponse } from '../../../services/endpoints/weather/types';
import { CoordinatesWithMetadata } from './actions/types';

export type GeolocationMetadata = {
  fromGeolocation: boolean;
};

type StateWithAsyncHandlers = {
  isLoading: boolean;
};

export type CurrentWeatherError = {
  message: string;
  coordinatesWithMetadata: CoordinatesWithMetadata;
};

export type ForecastError = {
  message: string;
  coordinates: Coordinates;
};

export type WeatherState = {
  currentWeather: {
    data: WeatherResponse | null;
    isLoading: boolean;
    error: CurrentWeatherError | null;
  } & GeolocationMetadata &
    StateWithAsyncHandlers;
  forecast: {
    data: ForecastResponse | null;
    error: ForecastError | null;
  } & StateWithAsyncHandlers;
};
