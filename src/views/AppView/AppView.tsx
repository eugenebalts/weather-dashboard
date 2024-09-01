import FavoriteLocations from '../../widgets/FavoriteLocations/FavoriteLocations';
import WeatherDashboard from '../../widgets/WeatherDashboard/WeatherDashboard';
import styles from './AppView.module.scss';

const AppView = () => (
  <div className={styles.wrapper}>
    <WeatherDashboard />
    <FavoriteLocations />
  </div>
);

export default AppView;
