import api from '../../api';
import { GeocodingResponse } from './types';

class GeocodingApi {
  private readonly path = 'geo/1.0/direct';

  async getCoordinates(city: string): Promise<GeocodingResponse[]> {
    const res: GeocodingResponse[] = await api.get(this.path, {
      q: city,
      limit: '5',
    });

    return res;
  }
}

export default new GeocodingApi();
