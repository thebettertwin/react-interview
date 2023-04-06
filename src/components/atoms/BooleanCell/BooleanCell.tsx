import React from 'react';

type BooleanCellProps = {
    booleanVal?: boolean;
    onOffVals: {
        on: string,
        off: string
    }
}

const BooleanCell: React.FC<BooleanCellProps> = ({ booleanVal = false, onOffVals }) => {
    return (
        <td>{booleanVal ? onOffVals.on : onOffVals.off}</td>
    );
}

export default BooleanCell;
