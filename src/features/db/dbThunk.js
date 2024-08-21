import { createAsyncThunk } from "@reduxjs/toolkit";

export const dbThunk = createAsyncThunk('dbThunk', async (table="") => {
    let response;
    if(table === ""){
        const rooms = await fetch('http://localhost:3004/rooms')
        const bookings = await fetch('http://localhost:3004/bookings')
        const employee = await fetch('http://localhost:3004/employee')
        const comment = await fetch('http://localhost:3004/comment')
        let data = {}
        if(rooms.ok && bookings.ok && employee.ok && comment.ok){
            const jsonrooms = await rooms.json()
            const jsonbookings = await bookings.json()
            const jsonemployee = await employee.json()
            const jsoncomment = await comment.json()
            data = {
                "rooms":jsonrooms.sort((a, b) => b.roomNumber - a.roomNumber),
                "bookings":jsonbookings.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate)),
                "employee":jsonemployee.sort((a, b) => new Date(b.startdate) - new Date(a.startdate)),
                "comment":jsoncomment.sort((a, b) => new Date((b.date.split(' '))[0]) - new Date((a.date.split(' '))[0])),
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