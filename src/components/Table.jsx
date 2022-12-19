import React from 'react';
import { DataTable } from '@aselmane/datatable';

const Table = ({ data }) => {
    const columns = [
        { title: 'First Name', data: 'firstName' },
        { title: 'Last Name', data: 'lastName' },
        { title: 'Start Date', data: 'startDate' },
        { title: 'Department', data: 'department' },
        { title: 'Date of Birth', data: 'dateOfBirth' },
        { title: 'Street', data: 'street' },
        { title: 'City', data: 'city' },
        { title: 'State', data: 'state' },
        { title: 'Zip Code', data: 'zipCode' },
    ]

    return (
        <div className="table">
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default Table;