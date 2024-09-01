import { useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Section from '../../../components/Section/Section';
import { RootState } from '../../../redux/store';
import styles from './Forecast.module.scss';
import processForecastData from '../../../utils/processForecastData';
import ForecastCard from './ForecastCard/ForecastCard';
import ReloadButton from '../../../components/ReloadButton/ReloadButton';

const Forecast = () => {
  const { data, isLoading, error } = useSelector((state: RootState) => state.weather.forecast);

  return (
    <Section width='100%'>
      <h2>Five Day Forecast</h2>
      <div className={styles.content}>
        {isLoading && <ClipLoader />}
        {error && <ReloadButton onClick={() => console.log('add reload handling')} />}
        {data && (
          <ul className={styles.list}>
            {processForecastData(data).map((forecastItem) => (
              <li className={styles.item} key={forecastItem.date}>
                <ForecastCard forecastItem={forecastItem} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
};

export default Forecast;
