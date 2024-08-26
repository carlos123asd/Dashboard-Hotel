import { createAsyncThunk } from "@reduxjs/toolkit";

export const dbThunkUser = createAsyncThunk('dbusers', async () => {
        const employee = await fetch('http://localhost:3004/employee')
        let data = {}
        if(employee.ok){
            const jsonemployee = await employee.json()
            data = {
                "users": jsonemployee,
            }
            console.log(data)
            return data
        }
    }
)