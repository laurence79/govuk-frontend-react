import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes
} from 'react';

export type ButtonProps = {
  /**
   * Renders with the secondary style.
   * @link https://design-system.service.gov.uk/components/button/#secondary-buttons
   */
  secondary?: boolean;
  /**
   * Renders with the warning style.
   * @link https://design-system.service.gov.uk/components/button/#warning-buttons
   */
  warning?: boolean;
  /**
   * Renders with the start style.
   * @link https://design-system.service.gov.uk/components/button/#start-buttons
   */
  start?: boolean;
  disabled?: boolean;
  /**
   * Prevents double clicks being interpreted as two single clicks.
   * @link https://design-system.service.gov.uk/components/button/#stop-users-from-accidentally-sending-information-more-than-once
   */
  preventDoubleClick?: boolean;
  /**
   * @deprecated Use "children" instead.
   */
  html?: React.ReactNode;
  /**
   * @deprecated Use "className" instead.
   */
  classes?: string;
  /**
   * @deprecated Use "start" instead.
   */
  isStartButton?: boolean;
} & (InputButtonProps | ButtonButtonProps | AnchorButtonProps);

type InputButtonProps = {
  element: 'input';
} & InputHTMLAttributes<HTMLInputElement>;

type ButtonButtonProps = {
  element?: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorButtonProps = {
  element: 'a';
} & AnchorHTMLAttributes<HTMLAnchorElement>;
