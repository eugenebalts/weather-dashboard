import { Coordinates } from '../../../types';

export type GeocodingResponse = {
  name: string;
  local_names: string[];
  country: string;
  state: string;
} & Coordinates;
