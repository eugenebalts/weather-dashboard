import { useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import Button from '../../../components/Button/Button';
import Location from '../../../components/Location/Location';
import WeatherIcon from '../../../components/WeatherIcon/WeatherIcon';
import capitalizeSentence from '../../../utils/capitalizeSentence';
import formatDegrees from '../../../utils/formatDegrees';
import getCurrentTimeForTimezone from '../../../utils/getCurrentTimeForTimezone';
import getLocationName from '../../../utils/getLocationName';
import styles from './CurrentWeatherHeader.module.scss';
import { CurrentWeatherProps } from '../CurrentWeatherCard.types';

const CurrentWeatherHeader = ({ weather }: CurrentWeatherProps) => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const UPDATE_INTERVAL = 30000;

    const updateCurrentDate = () => {
      setCurrentDate(getCurrentTimeForTimezone(weather.timezone));
    };

    updateCurrentDate();

    const intervalId = setInterval(updateCurrentDate, UPDATE_INTERVAL);

    return () => clearInterval(intervalId);
  }, [weather.timezone]);

  return (
    <div className={styles.wrapper}>
      <Location location={getLocationName(weather.name, weather.sys.country)} date={currentDate} />
      <div className={styles.weather}>
        <p className={styles.description}>{capitalizeSentence(weather.weather[0].description)}</p>
        <WeatherIcon icon={weather.weather[0].icon} />
        <p className={styles.temperature}>{formatDegrees(weather.main.temp)}</p>
      </div>
      <div className={styles.button}>
        <Button variant='text'>
          <IoMdAdd size='1rem' />
        </Button>
      </div>
    </div>
  );
};

export default CurrentWeatherHeader;
