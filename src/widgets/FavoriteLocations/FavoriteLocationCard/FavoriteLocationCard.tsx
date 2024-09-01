import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../../../components/Card/Card';
import { FavoriteLocationCardProps } from './FavoriteLocationCard.types';
import FavoriteLocationHead from './FavoriteLocationHead/FavoriteLocationHead';
import { WeatherResponse } from '../../../services/endpoints/weather/types';
import weatherApi from '../../../services/endpoints/weather/weatherApi';
import { AppDispatch } from '../../../redux/store';
import getCurrentWeather from '../../../redux/slices/weather/actions';
import FavoriteLocationBody from './FavoriteLocationBody/FavoritLocationBody';

const FavoriteLocationCard = ({ coordinatesWithMetadata }: FavoriteLocationCardProps) => {
  const [weather, setWeather] = useState<WeatherResponse>();

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        const res = await weatherApi.getCurrentWeather(coordinatesWithMetadata);

        setWeather(res);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCurrentWeather();
  }, [coordinatesWithMetadata]);

  const handleClickCard = () => {
    dispatch(getCurrentWeather(coordinatesWithMetadata));
  };

  return (
    <>
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
      {true && null /* PLACE FOR LOADING AND ERROR HANDLERS */}
    </>
  );
};

export default FavoriteLocationCard;
