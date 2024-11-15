import { createAsyncThunk } from "@reduxjs/toolkit";
import Booking from "../../../class/CBooking";

export const dbThunkBooking = createAsyncThunk('dbThunkBooking', async () => {
    const token = localStorage.getItem('TOKEN_AUTH')
    const bookings = await fetch('https://eympm1p3o7.execute-api.eu-west-3.amazonaws.com/production/bookings/booking',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    if(bookings.ok){
        const jsonbookings:Booking[] = await bookings.json()
        return (jsonbookings.sort((a:any, b:any) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()))[0]
    }
    
});
