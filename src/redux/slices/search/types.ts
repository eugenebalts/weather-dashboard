import { GeocodingResponse } from '../../../services/endpoints/geocoding/types';

export type SearchState = {
  search: string;
  isLoading: boolean;
  isError: boolean;
  suggestions: GeocodingResponse[];
};
