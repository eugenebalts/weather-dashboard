import { useSelector } from 'react-redux';
import Card from '../../../../components/Card/Card';
import { RootState } from '../../../../redux/store';
import CurrentWeatherHead from './CurrentWeatherHead/CurrentWeatherHead';
import CurrentWeatherBody from './CurrentWeatherBody/CurrentWeatherBody';

const CurrentWeatherCard = () => {
  const { data, fromGeolocation } = useSelector((state: RootState) => state.weather.currentWeather);

  if (!data) {
    return null;
  }

  return (
    <Card
      head={<CurrentWeatherHead weather={data} fromGeolocation={fromGeolocation} />}
      body={<CurrentWeatherBody weather={data} />}
      color='primary'
    />
  );
};

export default CurrentWeatherCard;
