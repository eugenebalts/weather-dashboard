import api from '../../api';
import { Coordinates } from '../geocoding/types';
import { WeatherResponse } from './types';

class WeatherApi {
  private readonly path = 'data/2.5/weather';

  async getCurrentWeather(coordinates: Coordinates): Promise<WeatherResponse> {
    const { lat, lon } = coordinates;

    const res: WeatherResponse = await api.get(this.path, {
      lat: String(lat),
      lon: String(lon),
    });

    return res;
  }
}

export default new WeatherApi();
