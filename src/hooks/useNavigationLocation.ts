import { toast } from 'react-toastify';
import { CoordinatesWithMetadata } from '../types';
import useFetchWeatherDashboard from './useFetchWeatherDashboard';

const useGeolocationPosition = () => {
  const { fetchWeatherDashboard } = useFetchWeatherDashboard();

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        const coordinatesWithMetadata: CoordinatesWithMetadata = {
          lat: latitude,
          lon: longitude,
          fromGeolocation: true,
        };

        fetchWeatherDashboard(coordinatesWithMetadata);
      },
      (err) => {
        toast.error(err.message);
      },
    );
  };

  return { getCurrentPosition };
};

export default useGeolocationPosition;
