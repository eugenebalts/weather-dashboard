export type GeocodingResponse = {
  name: string;
  local_names: string[];
  country: string;
  state: string;
} & Coordinates;

export type Coordinates = {
  lon: number;
  lat: number;
};
