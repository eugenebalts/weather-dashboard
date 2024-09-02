import { ReactNode } from 'react';
import { PropsWithOnClick } from '../../types';

export type CardProps = {
  head: ReactNode;
  body: ReactNode;
  variant?: 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
} & PropsWithOnClick;
