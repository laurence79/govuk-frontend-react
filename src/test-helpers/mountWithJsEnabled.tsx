/// <reference types="cypress" />
import React from 'react';
import { mount } from '@cypress/react';

/**
 * Mount a React component in a div with the 'js-enabled' class; register it as
 * an alias
 * To access: use an alias or original component reference
 * @function   mountWithJsEnabled
 * @param      {React.ReactElement}  jsx - component to mount
 * @param      {MountOptions}  [options] - options, like alias, styles
 * @see https://design-system.service.gov.uk/styles/page-template/
 * @example
 ```
  import Button from './Button.tsx'
  import { mountWithJsEnabled } from '../test-helpers'
  it('works', () => {
    mountWithJsEnabled(<Button onClick={cy.stub()} />)
    // use Cypress commands
    cy.click()
  })
 ```
 */
export const mountWithJsEnabled: typeof mount = (jsx, options) => {
  return mount(<div className="js-enabled">{jsx}</div>, options);
};
