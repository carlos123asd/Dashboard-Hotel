import { createAsyncThunk } from "@reduxjs/toolkit";
import userLogin from "../../../interfaces/InterfaceUserAuth";

export const dbThunkUser = createAsyncThunk('dbusers', async (infoLogin:userLogin) => {
        const employee = await fetch('http://localhost:8000/auth/login', {
            method: "POST",
            body: JSON.stringify({
                email: infoLogin.email,
                password: infoLogin.password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        if(employee.ok){
            const tokenAuth = await employee.json()
            return tokenAuth
        }
    }
)