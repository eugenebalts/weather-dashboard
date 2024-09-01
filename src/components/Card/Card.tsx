import clsx from 'clsx';
import styles from './Card.module.scss';
import { CardProps } from './Card.types';

const Card = ({ head, body, variant = 'contained', color = 'primary', onClick }: CardProps) => {
  const cardClasses = clsx(styles.wrapper, styles[variant], styles[color]);

  return (
    <div
      role='button'
      tabIndex={0}
      className={cardClasses}
      onClick={onClick}
      onKeyDown={() => null}
    >
      <div className={styles.head}>{head}</div>
      <div className={styles.body}>{body}</div>
    </div>
  );
};

export default Card;
