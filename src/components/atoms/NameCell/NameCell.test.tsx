import React from 'react';
import { render, screen } from '@testing-library/react';
import NameCell from './NameCell';

test('renders a first name ', () => {
    const tableRow = document.createElement('tr');
    render(<NameCell person={{ firstName: "Andrew", lastName: "Morgans" }} />, {
        container: document.body.appendChild(tableRow)
    });
    const name = screen.getByText(/Andrew/i);
    expect(name).toBeInTheDocument();
});

test('renders a surname ', () => {
    const tableRow = document.createElement('tr');
    render(<NameCell person={{ firstName: "Andrew", lastName: "Morgans" }} />, {
        container: document.body.appendChild(tableRow)
    });
    const name = screen.getByText(/Morgans/i);
    expect(name).toBeInTheDocument();
});