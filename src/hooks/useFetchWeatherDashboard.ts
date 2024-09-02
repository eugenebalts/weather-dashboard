import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { getCurrentWeather, getFiveDayForecast } from '../redux/slices/weather/actions';
import { CoordinatesWithMetadata } from '../types';

const useFetchWeatherDashboard = () => {
  const dispatch: AppDispatch = useDispatch();

  const fetchWeatherDashboard = useCallback(
    (coordinatesWithMetadata: CoordinatesWithMetadata) => {
      dispatch(getCurrentWeather(coordinatesWithMetadata));
      dispatch(getFiveDayForecast(coordinatesWithMetadata));
    },
    [dispatch],
  );

  return { fetchWeatherDashboard };
};

export default useFetchWeatherDashboard;
