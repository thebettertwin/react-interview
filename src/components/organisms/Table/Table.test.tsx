import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

import { OneOrMoreArray } from './Table';


const TableHeadings: OneOrMoreArray<string> = [
    "Name",
    "Rating",
    "Country",
    "Submission Date",
    "Verification"
]

test('renders a table ', () => {
    render(<Table tableHeadings={['Table heading']} />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
});

test('renders the table headings correctly ', () => {
    render(<Table tableHeadings={TableHeadings} />);
    const rowHeaders = screen.getAllByRole('rowheader');
    expect(rowHeaders).toHaveLength(5);
});


// Future tests - table data call to api etc 
// Currently the table is purely presentational 
// and the components used by the table are tested separately. 