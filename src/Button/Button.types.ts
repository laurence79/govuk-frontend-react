import { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  id?: string;
  element?: 'a' | 'input' | 'button';
  html?: React.ReactNode;
  name?: string;
  type?: ButtonHTMLAttributes<string>['type'];
  value?: string;
  disabled?: boolean;
  href?: string;
  classes?: string;
  attributes?: Record<string, unknown>;
  preventDoubleClick?: boolean | false;
  isStartButton?: boolean | false;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};
