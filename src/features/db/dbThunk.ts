const { createAsyncThunk } = require("@reduxjs/toolkit");

export const dbThunk = createAsyncThunk('dbThunk', async (table ?: string) => {
    let response: any;
    if(table === ""){
        const rooms = await fetch('http://localhost:3004/rooms')
        const bookings = await fetch('http://localhost:3004/bookings')
        const employee = await fetch('http://localhost:3004/employee')
        const comment = await fetch('http://localhost:3004/comment')
        let data: {}
        if(rooms.ok && bookings.ok && employee.ok && comment.ok){
            const jsonrooms:[] = await rooms.json()
            const jsonbookings:[] = await bookings.json()
            const jsonemployee:[] = await employee.json()
            const jsoncomment:[] = await comment.json()

            data = {
                "rooms": jsonrooms.sort((a:any, b:any) => b.roomNumber - a.roomNumber),
                "bookings": jsonbookings.sort((a:any, b:any) => b.orderDate - a.orderDate),
                "employee": jsonemployee.sort((a:any, b:any) => b.startdate - a.startdate),
                "comment": jsoncomment.sort((a:any, b:any) => (b.date.split(' '))[0] - (a.date.split(' '))[0]),
            }
            return data
        }
    }else if(table === 'rooms'){
        response = await fetch('http://localhost:3004/rooms')
        if(response.ok){
            const json = await response.json()
            return json.sort((a:any, b:any) => b.roomNumber - a.roomNumber)
        }
    }else if(table === 'bookings'){
        response = await fetch('http://localhost:3004/bookings')
        if(response.ok){
            const json = await response.json()
            return json.sort((a:any, b:any) => b.orderDate > a.orderDate)
        }
    }
});