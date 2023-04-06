import React from 'react';
import { UserData } from '../../../data/userData';

type NameCellProps = { person: Pick<UserData, 'firstName' | 'lastName'> };

const NameCell: React.FC<NameCellProps> = ({ person }) => {
    return (
        <td>{person.firstName} {person.lastName}</td>
    );
}

export default NameCell;
