import { GeocodingResponse } from '../../../services/endpoints/geocoding/types';

export type SearchState = {
  suggestions: GeocodingResponse[];
};
