import { Coordinates } from '../../../services/endpoints/geocoding/types';
import { WeatherResponse } from '../../../services/endpoints/weather/types';

export type GeolocationMetadata = {
  fromGeolocation: boolean;
};

export type WeatherState = {
  currentWeather: WeatherResponse | null;
  fromGeolocation: boolean;
  isLoading: boolean;
  error: string | null;
} & Coordinates &
  GeolocationMetadata;
