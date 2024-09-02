import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
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
import ReloadButton from '../../components/ReloadButton/ReloadButton';
import useFetchWeatherDashboard from '../../hooks/useFetchWeatherDashboard';

const ICON_SIZE = '2rem';

const WeatherDashboard = () => {
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.weather.currentWeather,
  );

  const { getCurrentPosition } = useGeolocationPosition();
  const { fetchWeatherDashboard } = useFetchWeatherDashboard();

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <LocationSearch />
        <Button variant='text' onClick={getCurrentPosition}>
          <p className={styles['location-button']}>
            <TbLocation size={ICON_SIZE} />
          </p>
        </Button>
      </div>
      {!data && !isLoading && !error && (
        <div className={styles.welcome}>
          <p className={styles.arrows}>
            <FaLongArrowAltUp className={styles.red} size={ICON_SIZE} />
            <FaLongArrowAltUp className={styles.green} size={ICON_SIZE} />
          </p>
          <p className={styles['welcome-message']}>
            <span className={styles.red}>Enter a location name </span> or{' '}
            <span className={styles.green}>confirm your location</span> to get an accurate weather
            forecast. Don`t know where it is? Find a place based on your current location!
          </p>
        </div>
      )}
      <div className={styles.content}>
        {isLoading && <ClipLoader />}
        {error && (
          <ReloadButton
            onClick={() => {
              fetchWeatherDashboard(error.coordinatesWithMetadata);
            }}
          />
        )}
        {data && (
          <>
            <CurrentWeather />
            <Forecast />
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherDashboard;
