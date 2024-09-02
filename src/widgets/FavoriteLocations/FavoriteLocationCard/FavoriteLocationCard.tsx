import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import useFetchWeatherDashboard from '../../../hooks/useFetchWeatherDashboard';
import { WeatherResponse } from '../../../services/endpoints/weather/types';
import weatherApi from '../../../services/endpoints/weather/weatherApi';
import Card from '../../../components/Card/Card';
import ReloadButton from '../../../components/ReloadButton/ReloadButton';
import { FavoriteLocationCardProps } from './FavoriteLocationCard.types';
import FavoriteLocationHead from './FavoriteLocationHead/FavoriteLocationHead';
import FavoriteLocationBody from './FavoriteLocationBody/FavoriteLocationBody';
import styles from './FavoriteLocationCard.module.scss';

const FavoriteLocationCard = ({ coordinatesWithMetadata }: FavoriteLocationCardProps) => {
  const [weather, setWeather] = useState<WeatherResponse | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { fetchWeatherDashboard } = useFetchWeatherDashboard();

  const fetchCurrentWeather = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setWeather(null);

    try {
      const res = await weatherApi.getCurrentWeather(coordinatesWithMetadata);

      setWeather(res);
      setError(null);
      setIsLoading(false);
    } catch {
      const message = 'Failed to load Favorite Location';

      setIsLoading(false);
      setError(message);
      toast.error(message);
    }
  }, [coordinatesWithMetadata]);

  const handleClickCard = () => {
    fetchWeatherDashboard(coordinatesWithMetadata);

    document.body.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, [coordinatesWithMetadata]);

  return (
    <div className={styles.wrapper}>
      {isLoading && <ClipLoader />}
      {error && <ReloadButton onClick={fetchCurrentWeather} />}
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
