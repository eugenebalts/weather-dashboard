import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
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
      (err) => {
        toast.error(err.message);
      },
    );
  };

  return { getCurrentPosition };
};

export default useGeolocationPosition;
