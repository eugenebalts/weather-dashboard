import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import { RootState } from '../../redux/store';
import CurrentWeatherHeader from './CurrentWeatherHeader/CurrentWeatherHeader';
import CurrentWeatherBody from './CurrentWeatherBody/CurrentWeatherBody';

const CurrentWeatherCard = () => {
  const { currentWeather } = useSelector((state: RootState) => state.weather);

  if (!currentWeather) {
    return null;
  }

  return (
    <Card
      header={<CurrentWeatherHeader weather={currentWeather} />}
      body={<CurrentWeatherBody weather={currentWeather} />}
      color='primary'
    />
  );
};

export default CurrentWeatherCard;
