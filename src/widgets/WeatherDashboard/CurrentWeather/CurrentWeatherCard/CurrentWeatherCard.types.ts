import { GeolocationMetadata } from '../../../../types';
import { WeatherResponse } from '../../../../services/endpoints/weather/types';

export type CurrentWeatherBodyProps = {
  weather: WeatherResponse;
};

export type CurrentWeatherHeadProps = CurrentWeatherBodyProps & GeolocationMetadata;
