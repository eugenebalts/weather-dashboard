import styles from './Location.module.scss';
import { CurrentLocationProps } from './Location.types';

const Location = ({ location, date }: CurrentLocationProps) => (
  <div className={styles.wrapper}>
    <p className={styles.location}>{location}</p>
    {date ?? <p className={styles.date}>{date}</p>}
  </div>
);

export default Location;
