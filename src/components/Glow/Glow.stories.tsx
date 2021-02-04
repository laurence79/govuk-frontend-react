/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Glow } from './Glow';

export default {
  title: 'components/Glow'
};

const content = (
  <>
    <a href="#">I am an anchor</a>
    <span>I&apos;m some text</span>
    <div>
      <button type="button">I&apos;m a button</button>
    </div>
  </>
);

export const On = () => <Glow on>{content}</Glow>;
export const Off = () => <Glow on={false}>{content}</Glow>;
