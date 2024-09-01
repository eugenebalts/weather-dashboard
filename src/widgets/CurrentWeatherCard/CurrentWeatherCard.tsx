import { useSelector } from 'react-redux';
import { IoMdAdd } from 'react-icons/io';
import Card from '../../components/Card/Card';
import styles from './CurrentWeatherCard.module.scss';
import { RootState } from '../../redux/store';
import Location from '../../components/Location/Location';
import getLocationName from '../../utils/getLocationName';
import getCurrentTimeForTimezone from '../../utils/getCurrentTimeForTimezone';
import formatDegrees from '../../utils/formatDegrees';
import capitalizeSentence from '../../utils/capitalizeSentence';
import WeatherIcon from '../../components/WeatherIcon/WeatherIcon';
import Button from '../../components/Button/Button';

const CurrentWeatherCard = () => {
  const { currentWeather } = useSelector((state: RootState) => state.weather);

  if (!currentWeather) {
    return null;
  }

  const header = (
    <div className={styles.header}>
      <Location
        location={getLocationName(currentWeather.name, currentWeather.sys.country)}
        date={getCurrentTimeForTimezone(currentWeather.timezone)} // TODO: update every 30sec
      />
      <div className={styles.header__weather}>
        <p className={styles.description}>
          {capitalizeSentence(currentWeather.weather[0].description)}
        </p>
        <WeatherIcon icon={currentWeather.weather[0].icon} />
        <p className={styles.temperature}>{formatDegrees(currentWeather.main.temp)}</p>
      </div>
      <div className={styles.button}>
        <Button variant='text'>
          <IoMdAdd size='1rem' />
        </Button>
      </div>
    </div>
  );

  return <Card header={header} body='Body' color='primary' />;
};

export default CurrentWeatherCard;
