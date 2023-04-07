import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Button from './Button';
import Modal from './Modal';
import {server_calls } from '../api/server'
import {useGetData } from '../custom-hooks/FetchData'
import "../main.css"

function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { carData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70, hide: true},
        { field: 'make', headerName: 'Make', flex: 1},
        { field: 'model', headerName: 'Model', flex: 1},
        { field: 'color', headerName: 'Color', flex: 1},
        { field: 'year', headerName: 'Year', flex: 1},
    ]

    return (
        <>
            <Modal
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
                <div className="buttons">
                    <div>
                        <Button onClick={() => handleOpen()}>Add New Car</Button>
                        <Button onClick={handleOpen}>Update</Button>
                        <Button onClick={deleteData}>Delete</Button>
                    </div>
                </div>
                <div className={ open ? "hidden" : "grid-container"}>
                    <h2>My Cars</h2>
                    <DataGrid  
                    className="grid" rows={carData} columns={columns} rowsPerPageOptions={[5]}
                    checkboxSelection={true} 
                    onSelectionModelChange={ (item) => {
                        setSelectionModel(item)
                    }}
                    />
            </div>
        </>
    )
};

export default DataTable
