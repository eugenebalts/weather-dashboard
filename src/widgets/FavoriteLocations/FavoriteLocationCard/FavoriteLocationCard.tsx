import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import Card from '../../../components/Card/Card';
import { FavoriteLocationCardProps } from './FavoriteLocationCard.types';
import FavoriteLocationHead from './FavoriteLocationHead/FavoriteLocationHead';
import { WeatherResponse } from '../../../services/endpoints/weather/types';
import weatherApi from '../../../services/endpoints/weather/weatherApi';
import { AppDispatch } from '../../../redux/store';
import { getCurrentWeather, getFiveDayForecast } from '../../../redux/slices/weather/actions';
import FavoriteLocationBody from './FavoriteLocationBody/FavoriteLocationBody';
import styles from './FavoriteLocationCard.module.scss';
import ReloadButton from '../../../components/ReloadButton/ReloadButton';

const FavoriteLocationCard = ({ coordinatesWithMetadata }: FavoriteLocationCardProps) => {
  const [weather, setWeather] = useState<WeatherResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      setIsLoading(true);

      try {
        const res = await weatherApi.getCurrentWeather(coordinatesWithMetadata);

        setWeather(res);
        setError(null);
        setIsLoading(false);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to load Favorite Locations';

        setIsLoading(false);
        setError(message);
        toast.error(message);
      }
    };

    fetchCurrentWeather();
  }, [coordinatesWithMetadata]);

  const handleClickCard = () => {
    dispatch(getCurrentWeather(coordinatesWithMetadata));
    dispatch(getFiveDayForecast(coordinatesWithMetadata));
  };

  return (
    <div className={styles.wrapper}>
      {isLoading && <ClipLoader />}
      {error && <ReloadButton onClick={() => console.log('TODO: ADD handler')} />}
      {weather && (
        <Card
          head={
            <FavoriteLocationHead
              fromGeolocation={coordinatesWithMetadata.fromGeolocation}
              weather={weather}
              initialCoordinates={coordinatesWithMetadata}
            />
          }
          body={<FavoriteLocationBody weather={weather} />}
          color='secondary'
          onClick={handleClickCard}
        />
      )}
      {error && null}
    </div>
  );
};

export default FavoriteLocationCard;
