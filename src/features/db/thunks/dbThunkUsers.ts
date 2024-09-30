import { createAsyncThunk } from "@reduxjs/toolkit";
import Employee from "../../../class/CEmployee";

export const dbThunkUser = createAsyncThunk('dbThunkUser', async () => {
    const token = localStorage.getItem('TOKEN_AUTH')
    const employee = await fetch('http://localhost:3000/users/user',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    if(employee.ok){
        const jsonemployee:Employee[] = await employee.json()
        return jsonemployee.sort((a:any, b:any) => new Date(b.startdate).getTime() - new Date(a.startdate).getTime())
    }
});