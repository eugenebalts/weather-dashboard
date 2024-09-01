import { useDispatch, useSelector } from 'react-redux';
import { IoMdAdd } from 'react-icons/io';
import Button from '../../../../components/Button/Button';
import Location from '../../../../components/Location/Location';
import WeatherIcon from '../../../../components/WeatherIcon/WeatherIcon';
import capitalizeSentence from '../../../../utils/capitalizeSentence';
import formatDegrees from '../../../../utils/formatDegrees';
import getLocationName from '../../../../utils/getLocationName';
import { CurrentWeatherHeadProps } from '../CurrentWeatherCard.types';
import styles from './CurrentWeatherHead.module.scss';
import { AppDispatch, RootState } from '../../../../redux/store';
import { favoriteLocationsActions } from '../../../../redux/slices/favoriteLocations/favoriteLocationsSlice';
import useCurrentDate from '../../../../hooks/useCurrentDate';

const CurrentWeatherHead = ({ weather, fromGeolocation }: CurrentWeatherHeadProps) => {
  const { favoriteLocations } = useSelector((state: RootState) => state.favoriteLocations);

  const currentDate = useCurrentDate(weather.timezone);

  const dispatch: AppDispatch = useDispatch();

  const isFavoriteLocation = favoriteLocations.find((location) => {
    const { coord } = weather;

    return (
      (fromGeolocation && location.fromGeolocation) ||
      (location.lat === coord.lat && location.lon === coord.lon)
    );
  });

  const handleClickAdd = () => {
    const { coord } = weather;

    if (!isFavoriteLocation) {
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
        <div className={styles.temperature_minmax}>
          <p>H: {formatDegrees(weather.main.temp_max)}</p>
          <p>L: {formatDegrees(weather.main.temp_min)}</p>
        </div>
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
