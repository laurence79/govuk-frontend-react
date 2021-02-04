import * as React from 'react';
import { mount } from '@cypress/react';
import { Tag } from './Tag';
import { TagColour, TagProps } from './Tag.types';

const HELLO = 'Hello';

describe('Tag Component', () => {
  let defaultProps: TagProps;

  beforeEach(() => {
    defaultProps = {
      children: HELLO
    };
  });

  describe('rendering', () => {
    it('renders its text', () => {
      mount(<Tag {...defaultProps} />);

      cy.contains(HELLO);
    });
  });

  describe('appearance', () => {
    const colours: TagColour[] = [
      'dark-blue',
      'grey',
      'green',
      'turquoise',
      'blue',
      'purple',
      'pink',
      'red',
      'orange',
      'yellow'
    ];
    colours.forEach(colour => {
      it(`renders ${colour}`, () => {
        mount(<Tag {...defaultProps} colour={colour} />);
        cy.percySnapshot();
      });
    });

    it('renders loading', () => {
      mount(<Tag loading>Loading</Tag>);
      cy.percySnapshot();
    });
  });
});
