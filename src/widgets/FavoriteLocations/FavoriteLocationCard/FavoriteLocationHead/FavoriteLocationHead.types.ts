import { Coordinates, GeolocationMetadata, PropsWithWeatherData } from '../../../../types';

export type FavoriteLocationHeadProps = {
  initialCoordinates: Coordinates;
} & GeolocationMetadata &
  PropsWithWeatherData;
