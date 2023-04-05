import React from 'react';
import './HeaderCell.css';

const HeaderCell = ({ children }: { children: string }) => {
    return (
        <th role="rowheader" className="a-header-cell">{children}</th>
    );
}

export default HeaderCell;
