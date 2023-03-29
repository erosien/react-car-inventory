import React from 'react'
import { DataGrid, } from '@mui/x-data-grid';
import "../main.css"

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
]

const rows = [
    { id: 1, lastName: 'Lobster', firstName: 'Larry', age: 37 },
    { id: 2, lastName: 'Temple', firstName: 'Shirley', age: 10 },
    { id: 3, lastName: 'Kent', firstName: 'Clark', age: 45 },
    { id: 4, lastName: 'Lector', firstName: 'Hector', age: 76 },
  ];

function DataTable() {
    return (
        <>
            <div className="button-container">
                <button>
                    Create New Contact
                </button>
                <button>
                    Update
                </button>
                <button>
                    Delete
                </button>
            </div>
            <div className="grid-container" style={{ height: 400, width: '100%' }}>
                    <h2>My Contacts</h2>
                    <DataGrid  className="grid" rows={rows} columns={columns} pagesize={5} rowsPerPageOptions={[5]}
                    checkboxSelection={true} 
                    onSelectionModelChange={ () => {
                        setSelectionModel(item)
                    }}
                    />
            </div>
        </>
    )
}

export default DataTable
