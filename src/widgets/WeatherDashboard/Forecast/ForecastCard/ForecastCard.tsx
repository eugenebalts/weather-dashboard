import Card from '../../../../components/Card/Card';
import WeatherBrief from '../../../WeatherBrief/WeatherBrief';
import { ForecastCardProps } from './ForecastCard.types';

const ForecastCard = ({ forecastItem }: ForecastCardProps) => (
  <Card
    head={<p style={{ textAlign: 'center' }}>{forecastItem.date}</p>}
    body={
      <WeatherBrief
        description={forecastItem.weather.description}
        icon={forecastItem.weather.icon}
        tempMax={forecastItem.tempMax}
        tempMin={forecastItem.tempMin}
      />
    }
  />
);

export default ForecastCard;
