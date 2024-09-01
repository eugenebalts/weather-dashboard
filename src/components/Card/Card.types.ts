import { ReactNode } from 'react';

export type CardProps = {
  head: ReactNode;
  body: ReactNode;
  variant?: 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
};
