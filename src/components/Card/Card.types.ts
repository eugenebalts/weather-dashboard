import { ReactNode } from 'react';

export type CardProps = {
  header: ReactNode;
  body: ReactNode;
  variant?: 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
};
