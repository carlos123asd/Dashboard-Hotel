import { createSlice } from '@reduxjs/toolkit'

interface interfaceInit {
    orderby: string
}
const initialState:interfaceInit = {
     orderby: 'all'
}

const sliceFilterTopTable = createSlice({
    name: 'filterToptable',
    initialState,
    reducers: {
        setorderby(state,action){
            state.orderby = action.payload;
        }
    }
});

export default sliceFilterTopTable.reducer

export const {setorderby} = sliceFilterTopTable.actions

