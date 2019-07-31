import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('Addition', () => {
  it('know 2+2=4', () => {
    expect(2 + 2).toBe(4);
  });

  test('konw 2+2=4', () => {
    expect(2 + 2).toBe(4);
  });
});