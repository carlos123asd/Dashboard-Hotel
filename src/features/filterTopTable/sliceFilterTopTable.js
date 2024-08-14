import { createSlice } from '@reduxjs/toolkit'

const sliceFilterTopTable = createSlice({
    name: 'filterToptable',
    initialState: {
        orderby: 'all'
    },
    reducers: {
        setorderby(state,action){
            state.orderby = action.payload;
        }
    }
});

export default sliceFilterTopTable.reducer

export const {setorderby} = sliceFilterTopTable.actions

