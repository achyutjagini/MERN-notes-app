import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import api from '../api';
import styled from 'styled-components';
import 'react-table/react-table.css';
import './NotesList.css';


const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

//DidMount same as UseEffect
    useEffect(() => {
        const fetchNotes = async () => {
            setIsLoading(true);
            const result = await api.getAllNotes();
            setNotes(result.data.data);
            setIsLoading(false);
        };
     fetchNotes();
    
    }, []);

    const columns = [
        {
            Header: 'topic',
            accessor: 'topic',
            filterable: true,
        },
        {
            Header: 'note',
            accessor: 'note',
            // Cell: props => <span>{props.value.join(' / ')}</span>,
        },
    ];

    let showTable = true;

    if (!notes.length) {
        showTable = false;
    }

    return (
        <div>
            <h1 className="heading">Notes</h1>
            {showTable && (
                <ReactTable
                    data={notes}
                    columns={columns}
                    loading={isLoading}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={0}
                />
            )}
        </div>
    );
};

export default NotesList;
