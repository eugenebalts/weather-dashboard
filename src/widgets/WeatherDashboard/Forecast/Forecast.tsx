import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import { AppDispatch, RootState } from '../../../redux/store';
import { getFiveDayForecast } from '../../../redux/slices/weather/actions';
import processForecastData from '../../../utils/processForecastData';
import ReloadButton from '../../../components/ReloadButton/ReloadButton';
import Section from '../../../components/Section/Section';
import ForecastCard from './ForecastCard/ForecastCard';
import styles from './Forecast.module.scss';

const Forecast = () => {
  const { data, isLoading, error } = useSelector((state: RootState) => state.weather.forecast);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <Section width='100%' title='Five Day Forecast'>
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
