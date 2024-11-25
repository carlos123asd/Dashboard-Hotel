import { createAsyncThunk } from "@reduxjs/toolkit";
import userLogin from "../../../interfaces/InterfaceUserAuth";

export const dbThunkUser = createAsyncThunk('dbusers', async (infoLogin:userLogin) => {
        const login = await fetch('http://localhost:3000/auth/login', { //https://eympm1p3o7.execute-api.eu-west-3.amazonaws.com/production/auth/login
            method: "POST",
            body: JSON.stringify({
                "email": infoLogin.email,
                "password": infoLogin.password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(login.ok){
            const tokenAuth = await login.json()
            return tokenAuth
        } else {
            console.error("Error en la solicitud", login.status, await login.text());
        }
    }
)