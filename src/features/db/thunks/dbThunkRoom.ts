import { createAsyncThunk } from "@reduxjs/toolkit";
import Room from "../../../class/CRoom";

export const dbThunkRoom = createAsyncThunk('dbThunkRoom', async () => {
        const token = localStorage.getItem('TOKEN_AUTH')
        const rooms = await fetch('https://eympm1p3o7.execute-api.eu-west-3.amazonaws.com/production/rooms/room',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        if(rooms.ok){
            const jsonrooms:Room[] = await rooms.json()
            return (jsonrooms.sort((a:any, b:any) => Number(b.roomNumber) - Number(a.roomNumber)))[0]
        }
});
