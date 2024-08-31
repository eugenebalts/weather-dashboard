import clsx from 'clsx';
import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card = ({ header, body, variant = 'contained', color = 'primary' }: CardProps) => {
  const cardClasses = clsx(styles.wrapper, styles[variant], styles[color]);

  return (
    <div className={cardClasses}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};

export default Card;
