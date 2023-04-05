import React from 'react';
import HeaderCell from '../../atoms/HeaderCell/HeaderCell';

import { userData } from '../../../data/userData';
import NameCell from '../../atoms/NameCell/NameCell';
import PlainTextCell from '../../atoms/PlainTextCell/PlainTextCell';
import DateCell from '../../atoms/DateCell/DateCell';
import BooleanCell from '../../atoms/BooleanCell/BooleanCell';

import './Table.css'

export interface OneOrMoreArray<T> extends Array<T> {
    0: T
}

type TableProps = {
    tableHeadings: OneOrMoreArray<string>;
}

const Table: React.FC<TableProps> = ({ tableHeadings }) => {
    return (
        <div className="o-table__wrapper">
            <table className="o-table">
                <thead>
                    <tr>
                        {tableHeadings.map(heading => <HeaderCell key={heading + '-cell'}>{heading}</HeaderCell>)}
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user => {
                        return (
                            <tr key={user.id}>
                                <NameCell person={{ firstName: user.firstName, lastName: user.lastName }} />
                                <PlainTextCell>{user.rating}</PlainTextCell>
                                <PlainTextCell>{user.country}</PlainTextCell>
                                <DateCell date={user.submissionDate} />
                                <BooleanCell onOffVals={{ on: 'Verified', off: 'Unverified' }} booleanVal={user.verified} />
                            </tr>
                        )
                    })}
                </tbody>
            </table >
        </div>
    );
}

export default Table;
