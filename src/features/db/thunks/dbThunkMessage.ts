import { createAsyncThunk } from "@reduxjs/toolkit";
import Message from "../../../class/CMessage";

export const dbThunkMessage = createAsyncThunk('dbThunkMessage', async () => {
    const token = localStorage.getItem('TOKEN_AUTH')
    const comment = await fetch('http://localhost:3000/messages/contact',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    if(comment.ok){
        const jsoncomment:Message[] = await comment.json()
        return jsoncomment.sort((a:any, b:any) => new Date((b.date.split(' '))[0]).getTime() - new Date((a.date.split(' '))[0]).getTime())
    }
});
