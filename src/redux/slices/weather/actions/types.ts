import { WeatherResponse } from '../../../../services/endpoints/weather/types';
import { GeolocationMetadata } from '../../../../types';

export type GetCurrentWeatherThunkResponse = {
  weatherData: WeatherResponse;
} & GeolocationMetadata;
