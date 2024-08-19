import { createAsyncThunk } from "@reduxjs/toolkit";

export const dbThunk = createAsyncThunk('dbThunk', async (table="") => {
    let response;
    if(table === ""){
        const rooms = await fetch('http://localhost:3004/rooms')
        const bookings = await fetch('http://localhost:3004/bookings')
        let data = {}
        if(rooms.ok && bookings.ok){
            const jsonrooms = await rooms.json()
            const jsobookings = await bookings.json()
            data = {
                "rooms":jsonrooms,
                "bookings":jsobookings
            }
            console.log(data)
            return data
        }
    }else if(table === 'rooms'){
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