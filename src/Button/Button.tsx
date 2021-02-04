import React, { useEffect } from 'react';
import { Button as GUKButton } from 'govuk-frontend';
import { ButtonProps } from './Button.types';
import './Button.scss';

export const Button: React.FC<ButtonProps> = ({
  id,
  element = 'button',
  html,
  name,
  type,
  value,
  disabled,
  href,
  classes,
  attributes,
  preventDoubleClick,
  isStartButton,
  onClick
}) => {
  let classNames =
    element && ['input', 'button'].includes(element)
      ? 'govuk-button'
      : 'govuk-link';
  if (classes) {
    classNames = `${classNames} ${classes}`;
  }
  if (disabled) {
    classNames = `${classNames} govuk-button--disabled`;
  }
  let iconHtml = null;

  if (isStartButton) {
    classNames = `${classNames} govuk-button--start`;
    iconHtml = (
      <svg
        className="govuk-button__start-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="19"
        viewBox="0 0 33 40"
        role="presentation"
        focusable="false"
      >
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
      </svg>
    );
  }

  const commonAttributes: {
    id?: string;
    attributes?: {};
    className?: string;
    'data-module': string;
    'data-testid': 'Button';
  } = {
    ...attributes,
    className: classNames,
    'data-module': 'govuk-button',
    'data-testid': 'Button'
  };
  if (id) {
    commonAttributes.id = id;
  }

  let buttonAttributes: {
    name?: string;
    disabled?: boolean;
    'aria-disabled'?: boolean;
    'data-prevent-double-click'?: boolean;
  } = {
    name
  };

  if (disabled) {
    buttonAttributes = {
      ...buttonAttributes,
      disabled,
      'aria-disabled': true
    };
  }

  if (preventDoubleClick) {
    buttonAttributes = {
      ...buttonAttributes,
      'data-prevent-double-click': true
    };
  }

  let elem;
  if (element === 'a') {
    elem = (
      <a
        href={href || '#'}
        role="button"
        draggable="false"
        {...commonAttributes}
        onClick={onClick}
      >
        {html}
        {iconHtml}
      </a>
    );
  } else if (element === 'button') {
    elem = (
      // eslint-disable-next-line react/button-has-type
      <button
        type={type || 'button'}
        value={value}
        {...buttonAttributes}
        {...commonAttributes}
        onClick={onClick}
      >
        {html}
        {iconHtml}
      </button>
    );
  } else if (element === 'input') {
    elem = (
      <input
        value={value}
        type={type || 'submit'}
        {...buttonAttributes}
        {...commonAttributes}
        onClick={onClick}
      />
    );
  }

  useEffect(() => {
    const $button = document.querySelector('[data-module="govuk-button"]');
    if ($button) {
      new GUKButton($button).init();
    }
  });

  return <>{elem}</>;
};

export default Button;
