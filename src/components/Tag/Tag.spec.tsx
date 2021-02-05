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

  it('appears as expected', () => {
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

    mount(
      <>
        {colours.map(colour => (
          <>
            <Tag colour={colour}>{colour}</Tag>
            <br />
          </>
        ))}
      </>
    );

    cy.percySnapshot();
  });
});
