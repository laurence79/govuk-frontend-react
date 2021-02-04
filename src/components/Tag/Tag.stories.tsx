import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Tag } from './Tag';

storiesOf('components/Tag', module)
  .add('default style', () => <Tag text={text('content', 'ALPHA')} />)
  .add('loading', () => <Tag loading>Loading</Tag>)
  .add('green', () => <Tag text={text('content', 'PASSED')} colour="green" />)
  .add('red', () => <Tag text={text('content', 'REJECTED')} colour="red" />);
