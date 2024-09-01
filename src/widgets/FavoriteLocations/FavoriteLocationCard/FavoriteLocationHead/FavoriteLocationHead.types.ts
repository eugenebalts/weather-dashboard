import { GeolocationMetadata } from '../../../../redux/slices/weather/types';
import { PropsWithWeatherData } from '../../../../types';

export type FavoriteLocationHeadProps = GeolocationMetadata & PropsWithWeatherData;
