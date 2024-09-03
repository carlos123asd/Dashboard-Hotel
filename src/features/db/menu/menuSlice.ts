import { createSlice } from '@reduxjs/toolkit'

interface initState {
    show: boolean
}

const initialState:initState = {
    show: false,
}

const menuSlice = createSlice({
    name: 'menuSlice',
    initialState,
    reducers: {
        showMenu(state){
            if(state.show === true){
                state.show = false;
            }else{
                state.show = true;
            }
        }
    }
});

export default menuSlice.reducer

export const {showMenu} = menuSlice.actions

