import api from '../../api';

class GeocodingApi {
  private readonly path = 'geo/1.0/direct';

  async getCoordinates(city: string) {
    const res = await api.get(this.path, {
      q: city,
    });

    return res;
  }
}

export default new GeocodingApi();
