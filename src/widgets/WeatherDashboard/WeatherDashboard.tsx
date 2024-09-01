import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CurrentWeatherCard from '../CurrentWeatherCard/CurrentWeatherCard';
import styles from './WeatherDashboard.module.scss';
import useNavigationPosition from '../../hooks/useNavigationLocation';
import Button from '../../components/Button/Button';

const WeatherDashboard = () => {
  const { currentWeather } = useSelector((state: RootState) => state.weather);

  const { getCurrentPosition } = useNavigationPosition();

  useEffect(() => {
    getCurrentPosition();
  }, []);

  if (!currentWeather) {
    return <Button onClick={getCurrentPosition}>Get current position again</Button>;
  }

  return (
    <div className={styles.wrapper}>
      <CurrentWeatherCard />
    </div>
  );
};

export default WeatherDashboard;
