import { createAsyncThunk } from "@reduxjs/toolkit";
import userLogin from "../../../interfaces/InterfaceUserAuth";

export const dbThunkUser = createAsyncThunk('dbusers', async (infoLogin:userLogin) => {
        const login = await fetch('http://localhost:3000/auth/login', {
            method: "POST",
            body: JSON.stringify({
                email: infoLogin.email,
                password: infoLogin.password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        if(login.ok){
            const tokenAuth = await login.json()
            return tokenAuth
        }
    }
)