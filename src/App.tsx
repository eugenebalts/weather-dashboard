import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import LocationSearch from './widgets/LocationSearch/LocationSearch';
import WeatherDashboard from './widgets/WeatherDashboard/WeatherDashboard';
import styles from './App.module.scss';

const App = () => (
  <DefaultLayout>
    <div className={styles.wrapper}>
      <LocationSearch />
      <WeatherDashboard />
    </div>
  </DefaultLayout>
);

export default App;
