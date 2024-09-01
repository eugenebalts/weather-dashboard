import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import Button from '../../../../components/Button/Button';
import Location from '../../../../components/Location/Location';
import WeatherIcon from '../../../../components/WeatherIcon/WeatherIcon';
import capitalizeSentence from '../../../../utils/capitalizeSentence';
import formatDegrees from '../../../../utils/formatDegrees';
import getCurrentTimeForTimezone from '../../../../utils/getCurrentTimeForTimezone';
import getLocationName from '../../../../utils/getLocationName';
import { CurrentWeatherHeadProps } from '../CurrentWeatherCard.types';
import styles from './CurrentWeatherHead.module.scss';
import { AppDispatch, RootState } from '../../../../redux/store';
import { favoriteLocationsActions } from '../../../../redux/slices/favoriteLocations/favoriteLocationsSlice';

const CurrentWeatherHead = ({ weather, fromGeolocation }: CurrentWeatherHeadProps) => {
  const [currentDate, setCurrentDate] = useState<string>('');
  const { favoriteLocations } = useSelector((state: RootState) => state.favoriteLocations);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const UPDATE_INTERVAL = 30000;

    const updateCurrentDate = () => {
      setCurrentDate(getCurrentTimeForTimezone(weather.timezone));
    };

    updateCurrentDate();

    const intervalId = setInterval(updateCurrentDate, UPDATE_INTERVAL);

    return () => clearInterval(intervalId);
  }, [weather.timezone]);

  const isFavoriteLocation = favoriteLocations.find((location) => {
    const { coord } = weather;

    return (
      (fromGeolocation && location.fromGeolocation) ||
      (location.lat === coord.lat && location.lon === coord.lon)
    );
  });

  console.log(isFavoriteLocation);

  const handleClickAdd = () => {
    const { coord } = weather;

    if (!isFavoriteLocation) {
      console.log('adding');
      dispatch(
        favoriteLocationsActions.addLocation({
          ...coord,
          fromGeolocation,
        }),
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <Location
        location={
          weather.name && weather.sys.country
            ? getLocationName(weather.name, weather.sys.country)
            : 'Unknown Location'
        }
        date={currentDate}
      />
      <div className={styles.weather}>
        <p className={styles.description}>{capitalizeSentence(weather.weather[0].description)}</p>
        <WeatherIcon icon={weather.weather[0].icon} />
        <p className={styles.temperature}>{formatDegrees(weather.main.temp)}</p>
      </div>
      <div className={styles.button}>
        {!isFavoriteLocation && (
          <Button variant='text' color='secondary' onClick={handleClickAdd}>
            <IoMdAdd size='1rem' />
          </Button>
        )}
      </div>
    </div>
  );
};

export default CurrentWeatherHead;
