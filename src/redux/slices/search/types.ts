import { GeocodingResponse } from '../../../services/endpoints/geocoding/types';

export type SearchState = {
  search: string;
  isLoading: boolean;
  error: string | null;
  suggestions: GeocodingResponse[];
};
