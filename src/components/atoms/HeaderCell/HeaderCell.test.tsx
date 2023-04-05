import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderCell from './HeaderCell';


test('renders text ', () => {
    const tableRow = document.createElement('tr');
    render(<HeaderCell>Name</HeaderCell>, {
        container: document.body.appendChild(tableRow)
    });
    const heading = screen.getByText('Name');
    expect(heading).toBeInTheDocument();
});
