import { PropsWithWeatherData } from '../../../../types';
import capitalizeSentence from '../../../../utils/capitalizeSentence';
import formatDegrees from '../../../../utils/formatDegrees';

const FavoriteLocationBody = ({ weather }: PropsWithWeatherData) => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <p>{formatDegrees(weather.main.temp)}</p>
    <p>{capitalizeSentence(weather.weather[0].description)}</p>
  </div>
);

export default FavoriteLocationBody;
