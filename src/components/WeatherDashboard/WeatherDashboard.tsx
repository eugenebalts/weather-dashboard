import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Location from '../Location/Location';
import styles from './WeatherDashboard.module.scss';
import { Coordinates } from '../../services/endpoints/geocoding/types';
import { AppDispatch, RootState } from '../../redux/store';
import getCurrentWeather from '../../redux/slices/weather/actions';
import getCurrentTimeForTimezone from '../../utils/getCurrentTimeForTimezone';
import getLocationName from '../../utils/getLocationName';

const WeatherDashboard = () => {
  const [initialCoordinates, setInitialCoordinates] = useState<Coordinates>();

  const { currentWeather } = useSelector((state: RootState) => state.weather);

  const dispatch: AppDispatch = useDispatch();

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        setInitialCoordinates({
          lat: latitude,
          lon: longitude,
        });
      },
      (error) => alert(error.message),
    );
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(() => {
    if (initialCoordinates) {
      dispatch(getCurrentWeather(initialCoordinates));
    }
  }, [initialCoordinates]);

  return (
    <div className={styles.wrapper}>
      <Location
        location={
          currentWeather
            ? getLocationName(currentWeather.name, currentWeather.sys.country)
            : 'Location Not Found'
        }
        date={currentWeather ? getCurrentTimeForTimezone(currentWeather.timezone) : undefined}
      />
    </div>
  );
};

export default WeatherDashboard;
