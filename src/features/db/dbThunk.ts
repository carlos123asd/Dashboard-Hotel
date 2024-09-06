import { createAsyncThunk } from "@reduxjs/toolkit";
import Room from "../../class/Room";
import Booking from "../../class/Booking";
import Employee from "../../class/Employee";
import Message from "../../class/Message";

export const dbThunk = createAsyncThunk('dbThunk', async (table ?: string) => {
    let response: any;
    if(table === ""){
        const rooms = await fetch('http://localhost:3004/rooms')
        const bookings = await fetch('http://localhost:3004/bookings')
        const employee = await fetch('http://localhost:3004/employee')
        const comment = await fetch('http://localhost:3004/comment')
        
        let data:{rooms:Room[],bookings:Booking[],employee:Employee[],comment:Message[]}
        
        if(rooms.ok && bookings.ok && employee.ok && comment.ok){
            const jsonrooms:Room[] = await rooms.json()
            const jsonbookings:Booking[] = await bookings.json()
            const jsonemployee:Employee[] = await employee.json()
            const jsoncomment:Message[] = await comment.json()

            data = {
                rooms: jsonrooms.sort((a:any, b:any) => Number(b.roomNumber) - Number(a.roomNumber)),
                bookings: jsonbookings.sort((a:any, b:any) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()),
                employee: jsonemployee.sort((a:any, b:any) => new Date(b.startdate).getTime() - new Date(a.startdate).getTime()),
                comment: jsoncomment.sort((a:any, b:any) => new Date((b.date.split(' '))[0]).getTime() - new Date((a.date.split(' '))[0]).getTime()),
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