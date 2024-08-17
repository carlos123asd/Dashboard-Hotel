import { createAsyncThunk } from "@reduxjs/toolkit";

export const dbThunk = createAsyncThunk('dbThunk', async () => {
    let response;
    response = await fetch('http://localhost:3004/rooms')
    if(response.ok){
        const json = await response.json()
        return json.sort((a, b) => parseInt(b.roomNumber) - parseInt(a.roomNumber))
    }
});