import React from 'react';

const DateCell = ({ date }: { date: string }) => {
    const dateObj = new Date(parseInt(date));
    return (
        <td>{dateObj.toLocaleDateString("en-GB")}</td>
    );
}

export default DateCell;
