import { PropsWithChildren } from 'react';
import { PropsWithOnClick } from '../../types';

export type ButtonProps = {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  disableHover?: boolean;
} & PropsWithChildren &
  PropsWithOnClick;
