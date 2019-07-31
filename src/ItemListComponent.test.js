import ItemListComponent from './ItemListComponent';
import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';

describe('<ItemListComponent>', () => {
    it('should render', () => {
        const moveUpOption = jest.fn();
        const { container } = render(<ItemListComponent />);
        console.log('container: ', container);
        const btn = container.firstChild;
    });
}
);