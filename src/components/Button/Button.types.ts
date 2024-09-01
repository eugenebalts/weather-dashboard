import { PropsWithChildren } from 'react';

export type ButtonProps = {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  disableHover?: boolean;
} & PropsWithChildren;
