import { PropsWithWeatherData } from '../../../../types';
import capitalizeSentence from '../../../../utils/capitalizeSentence';
import formatDegrees from '../../../../utils/formatDegrees';
import styles from './FavoriteLocationBody.module.scss';

const FavoriteLocationBody = ({ weather }: PropsWithWeatherData) => (
  <div className={styles.wrapper}>
    <p>{formatDegrees(weather.main.temp)}</p>
    <p>{capitalizeSentence(weather.weather[0].description)}</p>
  </div>
);

export default FavoriteLocationBody;
