import { createAsyncThunk } from "@reduxjs/toolkit";

export const dbThunk = createAsyncThunk('dbThunk', async (table) => {
    let response;
    if(table === 'rooms'){
        response = await fetch('http://localhost:3004/rooms')
        if(response.ok){
            const json = await response.json()
            return json.sort((a, b) => parseInt(b.roomNumber) - parseInt(a.roomNumber))
        }
    }else if(table === 'bookings'){
        response = await fetch('http://localhost:3004/bookings')
        if(response.ok){
            const json = await response.json()
            return json.sort((a, b) => new Date(b.orderDate) > new Date(a.orderDate))
        }
    }
    
});