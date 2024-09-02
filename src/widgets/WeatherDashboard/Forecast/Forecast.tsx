import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Section from '../../../components/Section/Section';
import { AppDispatch, RootState } from '../../../redux/store';
import styles from './Forecast.module.scss';
import processForecastData from '../../../utils/processForecastData';
import ForecastCard from './ForecastCard/ForecastCard';
import ReloadButton from '../../../components/ReloadButton/ReloadButton';
import { getFiveDayForecast } from '../../../redux/slices/weather/actions';

const Forecast = () => {
  const { data, isLoading, error } = useSelector((state: RootState) => state.weather.forecast);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <Section width='100%'>
      <h2>Five Day Forecast</h2>
      <div className={styles.content}>
        {isLoading && <ClipLoader />}
        {error && <ReloadButton onClick={() => dispatch(getFiveDayForecast(error.coordinates))} />}
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
