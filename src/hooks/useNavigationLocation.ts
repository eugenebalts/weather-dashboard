import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { getCurrentWeather, getFiveDayForecast } from '../redux/slices/weather/actions';

const useGeolocationPosition = () => {
  const dispatch: AppDispatch = useDispatch();

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        const coordinates = {
          lat: latitude,
          lon: longitude,
        };

        dispatch(getCurrentWeather({ ...coordinates, fromGeolocation: true }));
        dispatch(getFiveDayForecast(coordinates));
      },
      () => {
        alert('Failed to get your location. Please enable browser to handle location');
      },
    );
  };

  return { getCurrentPosition };
};

export default useGeolocationPosition;
