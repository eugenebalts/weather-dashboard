import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import getCurrentWeather from '../redux/slices/weather/actions';

const useNavigationPosition = () => {
  const dispatch: AppDispatch = useDispatch();

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        dispatch(getCurrentWeather({ lat: latitude, lon: longitude }));
      },
      () => {
        alert('Failed to get your location. Please enable browser to handle location');
      },
    );
  };

  return { getCurrentPosition };
};

export default useNavigationPosition;
