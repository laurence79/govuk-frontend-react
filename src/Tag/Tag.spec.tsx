import * as React from 'react';
import { mount } from '@cypress/react';
import { Tag } from './Tag';
import { TagProps } from './Tag.types';

describe('Tag Component', () => {
  let defaultProps: TagProps;

  beforeEach(() => {
    defaultProps = {
      text: 'Hello'
    };
  });

  it('renders its text', () => {
    mount(<Tag {...defaultProps} />);

    cy.contains(defaultProps.text);
  });

  const colours: TagProps['colour'][] = ['RED', 'GREEN', 'GREY', 'ORANGE'];
  colours.forEach(colour => {
    it(`renders ${colour}`, () => {
      mount(<Tag {...defaultProps} colour={colour} />);
      cy.percySnapshot();
    });
  });
});
