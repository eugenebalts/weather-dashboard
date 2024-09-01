import { useSelector } from 'react-redux';
import { FaSearchLocation } from 'react-icons/fa';
import { RootState } from '../../redux/store';
import styles from './WeatherDashboard.module.scss';
import LocationSearch from '../LocationSearch/LocationSearch';
import useGeolocationPosition from '../../hooks/useNavigationLocation';
import Button from '../../components/Button/Button';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

const WeatherDashboard = () => {
  const { currentWeather } = useSelector((state: RootState) => state.weather);

  const { getCurrentPosition } = useGeolocationPosition();

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <LocationSearch />
        <Button variant='text' onClick={getCurrentPosition}>
          <p className={styles['location-button']}>
            Locate me <FaSearchLocation />
          </p>
        </Button>
      </div>
      {currentWeather ? (
        <CurrentWeather />
      ) : (
        <p>
          Enter a city name or confirm your location to get an accurate weather forecast. Don`t know
          where it is? Find a place based on your current location!
        </p>
      )}
    </div>
  );
};

export default WeatherDashboard;
