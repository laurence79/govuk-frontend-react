/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useRef } from 'react';
import { Button as GUKButton } from 'govuk-frontend';
import cx from 'classnames';
import { ButtonProps } from './Button.types';
import './Button.scss';
import { StartIcon } from './StartIcon';
import { compact } from '../../helpers';

/**
 * Renders a GOV.UK Design System Button component
 * @function Button
 * @link https://design-system.service.gov.uk/components/button/
 * @param {ButtonProps} props - The properties to render the component with
 */
export const Button = (props: ButtonProps): JSX.Element => {
  const {
    children,
    disabled = false,
    className: classNameIn,
    preventDoubleClick,
    secondary = false,
    warning = false,
    start: startIn = false,
    isStartButton,
    classes,
    html,
    ...rest
  } = props;

  const { element = 'button' } = rest;

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      new GUKButton(ref.current).init();
    }
  }, [ref]);

  const start = startIn || isStartButton || false;

  const combinedChildren = compact([
    children,
    html,
    start ? <StartIcon /> : null
  ]);

  const className = cx([
    classes,
    classNameIn,
    {
      'govuk-button': ['input', 'button'].includes(element),
      'govuk-link': element === 'a',
      'govuk-button--disabled': disabled,
      'govuk-button--secondary': secondary,
      'govuk-button--warning': warning,
      'govuk-button--start': start
    }
  ]);

  const commonAttributes = {
    ref,
    className,
    'data-module': 'govuk-button',
    'data-testid': 'Button',
    children: combinedChildren
  };

  const buttonAttributes = {
    ...(disabled
      ? {
          disabled,
          'aria-disabled': true
        }
      : {}),
    ...(preventDoubleClick ? { 'data-prevent-double-click': true } : {})
  };

  if (rest.element === 'a') {
    return (
      // children is in commonAttributes
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        {...rest}
        href={rest.href ?? '#'}
        role="button"
        draggable="false"
        {...commonAttributes}
      />
    );
  }

  if (rest.element === 'input') {
    const { type } = props;
    return (
      <input
        {...rest}
        type={type ?? 'submit'}
        {...buttonAttributes}
        {...commonAttributes}
      />
    );
  }

  return (
    // type is in props
    // eslint-disable-next-line react/button-has-type
    <button {...rest} {...buttonAttributes} {...commonAttributes} />
  );
};

export default Button;
