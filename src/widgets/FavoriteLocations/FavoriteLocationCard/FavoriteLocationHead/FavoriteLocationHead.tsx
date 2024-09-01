import { RiDeleteBin2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../redux/store';
import Location from '../../../../components/Location/Location';
import useCurrentDate from '../../../../hooks/useCurrentDate';
import getLocationName from '../../../../utils/getLocationName';
import { FavoriteLocationHeadProps } from './FavoriteLocationHead.types';
import styles from './FavoriteLocationHead.module.scss';
import Button from '../../../../components/Button/Button';
import { favoriteLocationsActions } from '../../../../redux/slices/favoriteLocations/favoriteLocationsSlice';

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
