import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('components/Button', module)
  .add('default', () => <Button>Continue</Button>)
  .add('Start now', () => <Button start>Start Now</Button>)
  .add('Secondary', () => <Button secondary>Find address</Button>)
  .add('Two buttons', () => (
    <>
      <Button className="govuk-!-margin-right-1">Save and continue</Button>
      <Button secondary>Save as draft</Button>
    </>
  ))
  .add('Warning button', () => (
    <Button classes="govuk-button--warning">Delete account</Button>
  ))
  .add('Disabled', () => <Button disabled>Disabled button</Button>)
  .add('Prevent Double Click', () => <Button>Confirm and send</Button>);
