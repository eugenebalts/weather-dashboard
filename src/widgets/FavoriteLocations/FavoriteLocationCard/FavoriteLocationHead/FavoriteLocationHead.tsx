import Location from '../../../../components/Location/Location';
import useCurrentDate from '../../../../hooks/useCurrentDate';
import getLocationName from '../../../../utils/getLocationName';
import { FavoriteLocationHeadProps } from './FavoriteLocationHead.types';

const FavoriteLocationHead = ({ weather, fromGeolocation }: FavoriteLocationHeadProps) => {
  const currentDate = useCurrentDate(weather.timezone);

  const locationName =
    weather.name && weather.sys.country
      ? getLocationName(weather.name, weather.sys.country)
      : 'Unknown Location';

  return (
    <Location
      location={`${locationName} ${fromGeolocation ? '(My Location)' : ''}`}
      date={currentDate}
    />
  );
};

export default FavoriteLocationHead;
