import capitalizeSentence from '../../utils/capitalizeSentence';
import formatDegrees from '../../utils/formatDegrees';
import WeatherIcon from '../../components/WeatherIcon/WeatherIcon';
import { WeatherBriefProps } from './WeatherBrief.types';
import styles from './WeatherBrief.module.scss';

const WeatherBrief = ({ description, icon, temp, tempMax, tempMin }: WeatherBriefProps) => (
  <div className={styles.wrapper}>
    <p className={styles.description}>{capitalizeSentence(description)}</p>
    <WeatherIcon icon={icon} />
    <p className={styles.temperature}>{formatDegrees(temp)}</p>
    <div className={styles.temperature_minmax}>
      <p>H: {formatDegrees(tempMax)}</p>
      <p>L: {formatDegrees(tempMin)}</p>
    </div>
  </div>
);

export default WeatherBrief;
