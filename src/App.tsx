import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import SearchInput from './components/SearchInput/SearchInput';
import styles from './App.module.scss';

const App = () => (
  <DefaultLayout>
    <div className={styles.wrapper}>
      <SearchInput placeholder='Enter city' onSearch={(value) => console.log(value)} />
      <div>Weather info or List of Favorites</div>
    </div>
  </DefaultLayout>
);

export default App;
