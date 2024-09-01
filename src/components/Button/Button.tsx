import { MouseEvent } from 'react';
import clsx from 'clsx';
import { ButtonProps } from './Button.types';
import styles from './Button.module.scss';

const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  disabled = false,
  disableHover = false,
  onClick,
}: ButtonProps) => {
  const buttonClasses = clsx(styles.button, styles[variant], styles[color], {
    [styles.disabled]: disabled,
    [styles['disable-hover']]: disableHover,
  });

  const handleClickButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={buttonClasses} onClick={handleClickButton} type='button' disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
