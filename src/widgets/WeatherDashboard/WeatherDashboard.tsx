import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { RootState } from '../../redux/store';
import useFetchWeatherDashboard from '../../hooks/useFetchWeatherDashboard';
import useCheckScreenWidth from '../../hooks/useCheckScreenWidth';
import ReloadButton from '../../components/ReloadButton/ReloadButton';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import Forecast from './Forecast/Forecast';
import LocationToolbar from '../LocationToolbar/LocationToolbar';
import { DEFAULT_ICON_SIZE, MOBILE_WIDTH } from '../../constants';
import styles from './WeatherDashboard.module.scss';

const WeatherDashboard = () => {
  const { data, isLoading, error } = useSelector((state: RootState) => state.weather.currentWeather);

  const { fetchWeatherDashboard } = useFetchWeatherDashboard();

  const isMobile = useCheckScreenWidth(MOBILE_WIDTH);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <div className={styles.wrapper}>
      {!isMobile && <LocationToolbar />}
      {!data && !isLoading && !error && !isMobile && (
        <div className={styles.welcome}>
          <p className={styles.arrows}>
            <FaLongArrowAltUp className={styles.red} size={DEFAULT_ICON_SIZE} />
            <FaLongArrowAltUp className={styles.green} size={DEFAULT_ICON_SIZE} />
          </p>
          <p className={styles['welcome-message']}>
            <span className={styles.red}>Enter a location name </span> or{' '}
            <span className={styles.green}>confirm your location</span> to get an accurate weather forecast. Don`t know
            where it is? Find a place based on your current location!
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
