import clsx from 'clsx';
import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  disabled = false,
  onClick,
}: ButtonProps) => {
  const buttonClasses = clsx(styles.button, styles[variant], styles[color], {
    [styles.disabled]: disabled,
  });

  return (
    <button className={buttonClasses} onClick={onClick} type='button' disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
