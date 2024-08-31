import { Coordinates } from '../../../services/endpoints/geocoding/types';
import { WeatherResponse } from '../../../services/endpoints/weather/types';

export type WeatherState = {
  currentWeather: WeatherResponse | null;
  isLoading: boolean;
  error: string | null;
} & Coordinates;
