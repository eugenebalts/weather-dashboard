import { useSelector } from 'react-redux';
import Card from '../../../../components/Card/Card';
import { RootState } from '../../../../redux/store';
import CurrentWeatherHead from './CurrentWeatherHead/CurrentWeatherHead';
import CurrentWeatherBody from './CurrentWeatherBody/CurrentWeatherBody';

const CurrentWeatherCard = () => {
  const { currentWeather, fromGeolocation } = useSelector((state: RootState) => state.weather);

  if (!currentWeather) {
    return null;
  }

  return (
    <Card
      head={<CurrentWeatherHead weather={currentWeather} fromGeolocation={fromGeolocation} />}
      body={<CurrentWeatherBody weather={currentWeather} />}
      color='primary'
    />
  );
};

export default CurrentWeatherCard;
