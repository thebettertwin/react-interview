import React from 'react';
import { render, screen } from '@testing-library/react';
import DateCell from './DateCell';


test('renders a timestamp ', () => {
    const tableRow = document.createElement('tr');
    render(<DateCell date="1676549713000" />, {
        container: document.body.appendChild(tableRow)
    });
    const date = screen.getByText('16/02/2023');
    expect(date).toBeInTheDocument();
});

