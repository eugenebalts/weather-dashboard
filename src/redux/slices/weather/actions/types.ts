import { Coordinates } from '../../../../services/endpoints/geocoding/types';
import { WeatherResponse } from '../../../../services/endpoints/weather/types';
import { GeolocationMetadata } from '../types';

export type CoordinatesWithMetadata = Coordinates & Partial<GeolocationMetadata>;

export type GetCurrentWeatherThunkResponse = {
  weatherData: WeatherResponse;
} & GeolocationMetadata;
