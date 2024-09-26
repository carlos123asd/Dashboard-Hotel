import { createAsyncThunk } from "@reduxjs/toolkit";
import Room from "../../class/CRoom";
import Booking from "../../class/CBooking";
import Employee from "../../class/CEmployee";
import Message from "../../class/CMessage";

export const dbThunk = createAsyncThunk('dbThunk', async (table ?: string) => {
    if(table === "users"){
        const employee = await fetch('http://localhost:8000/users/user')
        if(employee.ok){
            const jsonemployee:Employee[] = await employee.json()
            return jsonemployee.sort((a:any, b:any) => new Date(b.startdate).getTime() - new Date(a.startdate).getTime())
        }
    }else if(table === 'rooms'){
        const rooms = await fetch('http://localhost:8000/rooms/room')
        if(rooms.ok){
            const jsonrooms:Room[] = await rooms.json()
            return jsonrooms.sort((a:any, b:any) => Number(b.roomNumber) - Number(a.roomNumber))
        }
    }else if(table === 'bookings'){
        const bookings = await fetch('http://localhost:8000/bookings/booking')
        if(bookings.ok){
            const jsonbookings:Booking[] = await bookings.json()
            return jsonbookings.sort((a:any, b:any) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime())
        }
    }else if(table === 'messages'){
        const comment = await fetch('http://localhost:8000/messages/contact')
        if(comment.ok){
            const jsoncomment:Message[] = await comment.json()
            return jsoncomment.sort((a:any, b:any) => new Date((b.date.split(' '))[0]).getTime() - new Date((a.date.split(' '))[0]).getTime())
        }
    }else if(table === 'init'){
        const token = localStorage.getItem('TOKEN_AUTH')
        const comment = await fetch('http://localhost:8000/messages/contact',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const rooms = await fetch('http://localhost:8000/rooms/room',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const bookings = await fetch('http://localhost:8000/bookings/booking',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const employee = await fetch('http://localhost:8000/users/user',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        if(comment.ok && rooms.ok && bookings.ok && employee.ok){
            const jsoncomment:Message[] = await comment.json()
            const jsonbookings:Booking[] = await bookings.json()
            const jsonrooms:Room[] = await rooms.json()
            const jsonemployee:Employee[] = await employee.json()
            const data = {
                comment: jsoncomment.sort((a:any, b:any) => new Date((b.date.split(' '))[0]).getTime() - new Date((a.date.split(' '))[0]).getTime()),
                bookings: jsonbookings.sort((a:any, b:any) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()),
                rooms: jsonrooms.sort((a:any, b:any) => Number(b.roomNumber) - Number(a.roomNumber)),
                employee: jsonemployee.sort((a:any, b:any) => new Date(b.startdate).getTime() - new Date(a.startdate).getTime())
            }
            return data
        }
    }
});
/*
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
    }
*/