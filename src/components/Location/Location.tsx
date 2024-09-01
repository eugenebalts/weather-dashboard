import styles from './Location.module.scss';
import { CurrentLocationProps } from './Location.types';

const Location = ({ location, date }: CurrentLocationProps) => (
  <div className={styles.wrapper}>
    <div className={styles.location}>{location}</div>
    {date ?? <p className={styles.date}>{date}</p>}
  </div>
);

export default Location;
