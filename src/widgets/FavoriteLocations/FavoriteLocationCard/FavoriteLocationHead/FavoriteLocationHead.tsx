import { useDispatch } from 'react-redux';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { AppDispatch } from '../../../../redux/store';
import { favoriteLocationsActions } from '../../../../redux/slices/favoriteLocations/favoriteLocationsSlice';
import useCurrentDate from '../../../../hooks/useCurrentDate';
import getLocationName from '../../../../utils/getLocationName';
import Location from '../../../../components/Location/Location';
import Button from '../../../../components/Button/Button';
import { FavoriteLocationHeadProps } from './FavoriteLocationHead.types';
import styles from './FavoriteLocationHead.module.scss';

const FavoriteLocationHead = ({
  weather,
  fromGeolocation,
  initialCoordinates,
}: FavoriteLocationHeadProps) => {
  const currentDate = useCurrentDate(weather.timezone);

  const dispatch: AppDispatch = useDispatch();

  const locationName =
    weather.name && weather.sys.country
      ? getLocationName(weather.name, weather.sys.country)
      : 'Unknown Location';

  const handleClickDelete = () => {
    dispatch(favoriteLocationsActions.removeLocation(initialCoordinates));
  };

  return (
    <div className={styles.wrapper}>
      <Location
        location={`${locationName} ${fromGeolocation ? '(My Location)' : ''}`}
        date={currentDate}
      />
      <div>
        <Button variant='text' color='secondary' onClick={handleClickDelete}>
          <RiDeleteBin2Line />
        </Button>
      </div>
    </div>
  );
};

export default FavoriteLocationHead;
