import { useSelector } from 'react-redux';
import { TbLocation } from 'react-icons/tb';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { RootState } from '../../redux/store';
import styles from './WeatherDashboard.module.scss';
import LocationSearch from './LocationSearch/LocationSearch';
import useGeolocationPosition from '../../hooks/useNavigationLocation';
import Button from '../../components/Button/Button';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import Forecast from './Forecast/Forecast';

const ICONS_SIZE = '2rem';

const WeatherDashboard = () => {
  const { currentWeather } = useSelector((state: RootState) => state.weather);

  const { getCurrentPosition } = useGeolocationPosition();

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <LocationSearch />
        <Button variant='text' onClick={getCurrentPosition}>
          <p className={styles['location-button']}>
            <TbLocation size={ICONS_SIZE} />
          </p>
        </Button>
      </div>
      {currentWeather ? (
        <div className={styles.content}>
          <CurrentWeather />
          <Forecast />
        </div>
      ) : (
        <div className={styles.welcome}>
          <p className={styles.arrows}>
            <FaLongArrowAltUp className={styles.red} size={ICONS_SIZE} />
            <FaLongArrowAltUp className={styles.green} size={ICONS_SIZE} />
          </p>
          <p className={styles['welcome-message']}>
            <span className={styles.red}>Enter a city name </span> or{' '}
            <span className={styles.green}>confirm your location</span> to get an accurate weather
            forecast. Don`t know where it is? Find a place based on your current location!
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
