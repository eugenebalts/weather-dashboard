import { GeolocationMetadata } from '../../../../redux/slices/weather/types';
import { Coordinates } from '../../../../services/endpoints/geocoding/types';
import { PropsWithWeatherData } from '../../../../types';

export type FavoriteLocationHeadProps = {
  initialCoordinates: Coordinates;
} & GeolocationMetadata &
  PropsWithWeatherData;
