import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import LocationSearch from './components/LocationSearch/LocationSearch';
import styles from './App.module.scss';

const App = () => (
  <DefaultLayout>
    <div className={styles.wrapper}>
      <LocationSearch />
    </div>
  </DefaultLayout>
);

export default App;
