import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
    name: 'menuSlice',
    initialState: {
        show: false,
    },
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

