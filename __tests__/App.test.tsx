import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../src/components/wip/Contact';
import Features from '../src/components/wip/Features';
import Md from '../src/components/wip/Md';
import Progress from '../src/components/wip/Progress';
import Savry from '../src/components/wip/Savry';
import Ud from '../src/components/wip/Ud';

describe('Smoke tests for /components/wip', () => {
  test('renders Contact without crashing', () => {
    render(<Contact />);
  });

  test('renders Features without crashing', () => {
    render(<Features />);
  });

  test('renders Md without crashing', () => {
    render(<Md />);
  });

  test('renders Progress without crashing', () => {
    render(<Progress progress={1}/>);
  });

  test('renders Savry without crashing', () => {
    render(<Savry />);
  });

  test('renders Ud without crashing', () => {
    render(<Ud />);
  });
});
