import { createAsyncThunk } from "@reduxjs/toolkit";
import Employee from "../../../class/CEmployee";

export const dbThunkUser = createAsyncThunk('dbThunkUser', async () => {
    const token = localStorage.getItem('TOKEN_AUTH')
    const employee = await fetch('https://eympm1p3o7.execute-api.eu-west-3.amazonaws.com/production/users/user',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    if(employee.ok){
        const jsonemployee:Employee[] = await employee.json()
        return (jsonemployee.sort((a:any, b:any) => new Date(b.startdate).getTime() - new Date(a.startdate).getTime()))[0]
    }
});