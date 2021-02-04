import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

const startNow = {
  html: 'Start now',
  href: '#',
  isStartButton: true
};

const secondary = {
  html: 'Find address',
  classes: 'govuk-button--secondary'
};

const saveAndContinue = {
  html: 'Save and continue',
  classes: 'govuk-!-margin-right-1'
};

storiesOf('components/Button', module)
  .add('default', () => <Button html="Continue" />)
  .add('Start now', () => <Button {...startNow} />)
  .add('Secondary', () => <Button {...secondary} />)
  .add('Two buttons', () => (
    <>
      <Button {...saveAndContinue} />
      <Button {...secondary} html="Save as draft" />
    </>
  ))
  .add('Warning button', () => (
    <Button html="Delete account" classes="govuk-button--warning" />
  ))
  .add('Disabled', () => <Button html="Disabled button" disabled />)
  .add('Prevent Double Click', () => <Button html="Confirm and send" />);
