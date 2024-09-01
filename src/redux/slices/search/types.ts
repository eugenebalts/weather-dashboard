import { GeocodingResponse } from '../../../services/endpoints/geocoding/types';

export type SearchState = {
  search: string;
  suggestions: GeocodingResponse[];
};
