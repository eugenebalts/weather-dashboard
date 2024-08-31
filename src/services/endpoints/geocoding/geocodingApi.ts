import api from '../../api';
import { GeocodingResponse } from './types';

class GeocodingApi {
  private readonly path = 'geo/1.0/direct';

  async getCoordinates(city: string): Promise<GeocodingResponse[]> {
    const res = await api.get(this.path, {
      q: city,
    });

    return res as GeocodingResponse[];
  }
}

export default new GeocodingApi();
