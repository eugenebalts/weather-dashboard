import { useDispatch, useSelector } from 'react-redux';
import { IoMdAdd } from 'react-icons/io';
import { AppDispatch, RootState } from '../../../../../redux/store';
import { favoriteLocationsActions } from '../../../../../redux/slices/favoriteLocations/favoriteLocationsSlice';
import useCurrentDate from '../../../../../hooks/useCurrentDate';
import getLocationName from '../../../../../utils/getLocationName';
import Button from '../../../../../components/Button/Button';
import Location from '../../../../../components/Location/Location';
import { CurrentWeatherHeadProps } from '../CurrentWeatherCard.types';
import WeatherBrief from '../../../../WeatherBrief/WeatherBrief';
import { SMALL_ICON_SIZE } from '../../../../../constants';
import styles from './CurrentWeatherHead.module.scss';

const CurrentWeatherHead = ({ weather, fromGeolocation }: CurrentWeatherHeadProps) => {
  const { favoriteLocations } = useSelector((state: RootState) => state.favoriteLocations);

  const currentDate = useCurrentDate(weather.timezone);

  const dispatch: AppDispatch = useDispatch();

  const isFavoriteLocation = favoriteLocations.find((location) => {
    const { coord } = weather;

    return (fromGeolocation && location.fromGeolocation) || (location.lat === coord.lat && location.lon === coord.lon);
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
          weather.name && weather.sys.country ? getLocationName(weather.name, weather.sys.country) : 'Unknown Location'
        }
        date={currentDate}
      />
      <WeatherBrief
        description={weather.weather[0].description}
        icon={weather.weather[0].icon}
        temp={weather.main.temp}
        tempMax={weather.main.temp_max}
        tempMin={weather.main.temp_min}
      />
      <div className={styles.button}>
        {!isFavoriteLocation && (
          <Button variant='text' color='secondary' onClick={handleClickAdd}>
            <IoMdAdd size={SMALL_ICON_SIZE} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default CurrentWeatherHead;
