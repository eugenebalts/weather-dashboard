import { useSelector } from 'react-redux';
import Card from '../../../components/Card/Card';
import { RootState } from '../../../redux/store';
import CurrentWeatherHead from './CurrentWeatherHead/CurrentWeatherHead';
import CurrentWeatherBody from './CurrentWeatherBody/CurrentWeatherBody';

const CurrentWeatherCard = () => {
  const { currentWeather } = useSelector((state: RootState) => state.weather);

  if (!currentWeather) {
    return null;
  }

  return (
    <Card
      header={<CurrentWeatherHead weather={currentWeather} />}
      body={<CurrentWeatherBody weather={currentWeather} />}
      color='primary'
    />
  );
};

export default CurrentWeatherCard;
