import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from '../Navigation';

const Mocked = () => (
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
);

test('renders correctly', () => {
  const tree = renderer.create(<Mocked />).toJSON();
  expect(tree).toMatchSnapshot();
});
