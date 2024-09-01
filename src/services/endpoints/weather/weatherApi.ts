import api from '../../api';
import { Coordinates } from '../geocoding/types';
import { ForecastResponse, WeatherResponse } from './types';

class WeatherApi {
  private readonly weatherPath = 'data/2.5/weather';

  private readonly forecastPath = 'data/2.5/forecast';

  async getCurrentWeather(coordinates: Coordinates): Promise<WeatherResponse> {
    const { lat, lon } = coordinates;

    const res: WeatherResponse = await api.get(this.weatherPath, {
      lat: String(lat),
      lon: String(lon),
    });

    return res;
  }

  async getFiveDayForecast(coordinates: Coordinates): Promise<ForecastResponse> {
    const { lat, lon } = coordinates;

    const res: ForecastResponse = await api.get(this.forecastPath, {
      lat: String(lat),
      lon: String(lon),
    });

    return res;
  }
}

export default new WeatherApi();
