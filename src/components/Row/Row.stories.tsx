import React from 'react';
import { WidthContainer } from '../WidthContainer';
import { Row } from './Row';

export default {
  title: 'components/Row'
};

export const RowStory = () => (
  <WidthContainer>
    <Row>Some content</Row>
  </WidthContainer>
);
