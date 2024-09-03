import { createAsyncThunk } from "@reduxjs/toolkit";

interface rooms {
    id:string,
    roomNumber:number,
    photo:string[],
    typeRoom:string,
    description:string,
    offer:boolean,
    price:string,
    discount:number,
    cancellation:string,
    status:string,
    amenities:string
}
interface bookings {
    id: string,
    guest: string,
    orderDate: string,
    checkin: string,
    timein: string,
    checkout: string,
    timeout: string,
    ordertime: string,
    specialRequest: string,
    roomType: string,
    status: string,
    idRoom: number
}
interface employee {
    id:string,
    photo:string[],
    name:string,
    email:string,
    startdate:string,
    description:string,
    phone:string,
    status:string
}
interface message {
    id:string,
    date:string,
    idmessage:number,
    customer:string,
    email:string,
    phone:string,
    reason:string,
    comment:string,
    status:string
}

//Tipar lo que llega jsonrooms...
export const dbThunk = createAsyncThunk('dbThunk', async (table ?: string) => {
    let response: any;
    if(table === ""){
        const rooms = await fetch('http://localhost:3004/rooms')
        const bookings = await fetch('http://localhost:3004/bookings')
        const employee = await fetch('http://localhost:3004/employee')
        const comment = await fetch('http://localhost:3004/comment')
        let data: {}
        if(rooms.ok && bookings.ok && employee.ok && comment.ok){
            const jsonrooms:rooms[] = await rooms.json()
            const jsonbookings:bookings[] = await bookings.json()
            const jsonemployee:employee[] = await employee.json()
            const jsoncomment:message[] = await comment.json()

            data = {
                "rooms": jsonrooms.sort((a:any, b:any) => Number(b.roomNumber) - Number(a.roomNumber)),
                "bookings": jsonbookings.sort((a:any, b:any) => new Date(b.orderDate) - new Date(a.orderDate)),
                "employee": jsonemployee.sort((a:any, b:any) => new Date(b.startdate) - new Date(a.startdate)),
                "comment": jsoncomment.sort((a:any, b:any) => new Date((b.date.split(' '))[0]) - new Date((a.date.split(' '))[0])),
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