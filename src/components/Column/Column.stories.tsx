/* eslint-disable react/no-danger */
import React from 'react';
import { WidthContainer, Row, Column } from '..';

export default {
  title: 'components/Column'
};

export const ColumnStory = () => (
  <div>
    <style
      dangerouslySetInnerHTML={{ __html: `div { background: #00000022; }` }}
    />
    <WidthContainer>
      <Row>
        <Column.Full>Full column</Column.Full>
      </Row>
      <Row>
        <Column.Half>Half column</Column.Half>
        <Column.Half>Half column</Column.Half>
      </Row>
      <Row>
        <Column.Third>Third column</Column.Third>
        <Column.TwoThirds>Two thirds column</Column.TwoThirds>
      </Row>
      <Row>
        <Column.Quarter>Quarter column</Column.Quarter>
        <Column.ThreeQuarters>Three quarters column</Column.ThreeQuarters>
      </Row>
    </WidthContainer>
  </div>
);
