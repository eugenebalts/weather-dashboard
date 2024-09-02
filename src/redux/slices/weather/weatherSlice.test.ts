import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import { weatherReducer } from './weatherSlice';
import { getCurrentWeather } from './actions';
import { RootState } from '../../store';
import weatherApi from '../../../services/endpoints/weather/weatherApi';

jest.mock('../../../services/endpoints/weather/weatherApi', () => ({
  getCurrentWeather: jest.fn(),
  getFiveDayForecast: jest.fn(),
}));

describe('currentWeatherSlice', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        weather: weatherReducer,
      },
    });
  });

  it('handles getCurrentWeather.fulfilled action', async () => {
    const mockWeatherData = {};
    const mockFromGeolocation = true;

    const payload = { weatherData: mockWeatherData, fromGeolocation: mockFromGeolocation };

    (weatherApi.getCurrentWeather as jest.Mock).mockResolvedValue(mockWeatherData);

    await store.dispatch(
      getCurrentWeather({
        lat: 1.2,
        lon: 3.4,
        fromGeolocation: mockFromGeolocation,
      }) as any,
    );

    const state = store.getState() as RootState;

    expect(state.weather.currentWeather.isLoading).toBe(false);
    expect(state.weather.currentWeather.data).toEqual(mockWeatherData);
    expect(state.weather.currentWeather.fromGeolocation).toBe(mockFromGeolocation);
  });
});
