import { createSlice } from "@reduxjs/toolkit";

interface initState {
    show: boolean,
    showListMessage: boolean
}

const initialState:initState = {
    show: false,
    showListMessage: false
}

const NotificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers:{
        shownotificationBooking(state){
            if(state.show === false){
                state.show = true
            }else{
                state.show = false
            }
        },
        shownotificationMessage(state){
            if(state.showListMessage === false){
                state.showListMessage = true
            }else{
                state.showListMessage = false
            }
        },
        hidemessage(state,action){
            state.showListMessage = action.payload
        },
        hidenotBookings(state,action){
            state.show = action.payload
        }
    }
})

export default NotificationSlice.reducer
export const { shownotificationBooking, shownotificationMessage, hidemessage, hidenotBookings } = NotificationSlice.actions