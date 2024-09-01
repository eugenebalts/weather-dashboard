import CurrentWeatherCard from './CurrentWeatherCard/CurrentWeatherCard';
import styles from './CurrentWeather.module.scss';

const CurrentWeather = () => (
  <section className={styles.wrapper}>
    <h2>Current Weather</h2>
    <CurrentWeatherCard />
  </section>
);

export default CurrentWeather;
