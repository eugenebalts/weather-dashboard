import api from '../../api';

class WeatherApi {
  private readonly path = 'data/2.5/weather';

  async getCurrentWeather(lat: string, lon: string) {
    const res = await api.get(this.path, {
      lat,
      lon,
    });

    return res;
  }
}

export default new WeatherApi();
