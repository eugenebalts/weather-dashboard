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

const mockCoordinatesWithMetadata = { lat: 1.2, lon: 3.4, fromGeolocation: false };

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
    const mockWeatherData = {
      temperature: 20,
      description: 'Clear sky',
    };
    const mockFromGeolocation = true;

    (weatherApi.getCurrentWeather as jest.Mock).mockResolvedValue(mockWeatherData);

    await store.dispatch(getCurrentWeather(mockCoordinatesWithMetadata) as any);

    const state = store.getState() as RootState;

    expect(state.weather.currentWeather.isLoading).toBe(false);
    expect(state.weather.currentWeather.data).toEqual(mockWeatherData);
    expect(state.weather.currentWeather.fromGeolocation).toBe(mockCoordinatesWithMetadata.fromGeolocation);
  });

  it('handles getCurrentWeather.rejected action', async () => {
    const mockError = {
      coordinatesWithMetadata: mockCoordinatesWithMetadata,
      message: 'Failed to get Current Weather',
    };

    (weatherApi.getCurrentWeather as jest.Mock).mockRejectedValue(mockError);

    await store.dispatch(getCurrentWeather(mockCoordinatesWithMetadata) as any);

    const state = store.getState() as RootState;

    expect(state.weather.currentWeather.isLoading).toBe(false);
    expect(state.weather.currentWeather.data).toBe(null);
    expect(state.weather.currentWeather.fromGeolocation).toBe(mockCoordinatesWithMetadata.fromGeolocation);
    expect(state.weather.currentWeather.error).toEqual(mockError);
  });
});
