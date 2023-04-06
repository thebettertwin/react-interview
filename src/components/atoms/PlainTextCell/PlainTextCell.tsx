import React from 'react';

const PlainTextCell = ({ children }: { children: string | number }) => {
    return (
        <td className={typeof children === "number" ? "text-center" : ""}>{children}</td>
    );
}

export default PlainTextCell;
