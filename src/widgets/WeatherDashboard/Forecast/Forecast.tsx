import { useSelector } from 'react-redux';
import Section from '../../../components/Section/Section';
import { RootState } from '../../../redux/store';
import styles from './Forecast.module.scss';
import processForecastData from '../../../utils/processForecastData';
import ForecastCard from './ForecastCard/ForecastCard';

const Forecast = () => {
  const { forecast } = useSelector((state: RootState) => state.weather);

  return (
    <Section>
      <h2>Five Day Forecast</h2>
      {forecast && (
        <ul className={styles.list}>
          {processForecastData(forecast).map((forecastItem) => (
            <li className={styles.item} key={forecastItem.date}>
              <ForecastCard forecastItem={forecastItem} />
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
};

export default Forecast;
