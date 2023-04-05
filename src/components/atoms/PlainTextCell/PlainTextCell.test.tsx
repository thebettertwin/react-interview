import React from 'react';
import { render, screen } from '@testing-library/react';
import PlainTextCell from './PlainTextCell';

test('renders plain text ', () => {
    const tableRow = document.createElement('tr');
    render(<PlainTextCell>Plain text</PlainTextCell>, {
        container: document.body.appendChild(tableRow)
    });
    const text = screen.getByText('Plain text');
    expect(text).toBeInTheDocument();
});

test('renders plain text if number passed', () => {
    const tableRow = document.createElement('tr');
    render(<PlainTextCell>190</PlainTextCell>, {
        container: document.body.appendChild(tableRow)
    });
    const text = screen.getByText('190');
    expect(text).toBeInTheDocument();
});
