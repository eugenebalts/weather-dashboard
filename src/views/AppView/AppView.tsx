import { MOBILE_WIDTH } from '../../constants';
import useCheckScreenWidth from '../../hooks/useCheckScreenWidth';
import FavoriteLocations from '../../widgets/FavoriteLocations/FavoriteLocations';
import WeatherDashboard from '../../widgets/WeatherDashboard/WeatherDashboard';
import styles from './AppView.module.scss';

const AppView = () => {
  const isMobile = useCheckScreenWidth(MOBILE_WIDTH);

  return (
    <div className={styles.wrapper}>
      <WeatherDashboard />
      {!isMobile && <FavoriteLocations />}
    </div>
  );
};

export default AppView;
