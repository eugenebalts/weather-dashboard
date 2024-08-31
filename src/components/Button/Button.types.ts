import { PropsWithChildren, ReactNode } from 'react';

export type ButtonProps = {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
} & PropsWithChildren;
