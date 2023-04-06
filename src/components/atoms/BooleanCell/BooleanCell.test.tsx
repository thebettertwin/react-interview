import React from 'react';
import { render, screen } from '@testing-library/react';
import BooleanCell from './BooleanCell';


test('renders off state if no booleanVal passed ', () => {
    const tableRow = document.createElement('tr');
    render(<BooleanCell onOffVals={{ on: 'Validated', off: 'Unvalidated' }} />, {
        container: document.body.appendChild(tableRow)
    });
    const unvalidated = screen.getByText('Unvalidated');
    expect(unvalidated).toBeInTheDocument();
});

test('renders on state if booleanVal passed ', () => {
    const tableRow = document.createElement('tr');
    render(<BooleanCell booleanVal onOffVals={{ on: 'Validated', off: 'Unvalidated' }} />, {
        container: document.body.appendChild(tableRow)
    });
    const validated = screen.getByText('Validated');
    expect(validated).toBeInTheDocument();
});
