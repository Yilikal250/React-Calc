import React from 'react';
import renderer from 'react-test-renderer';
import operate from '../../logic/operate';

describe('Testin for all ', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<operate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Addition test', () => {
    expect(operate(12, 20, '+')).toEqual('32');
  });
  test('Subtraction test', () => {
    expect(operate(32, 20, '-')).toEqual('12');
  });
  test('Multiply test', () => {
    expect(operate(10, 20, 'x')).toEqual('200');
  });
  test('Division test', () => {
    expect(operate(20, 2, '÷')).toEqual('10');
  });
});
