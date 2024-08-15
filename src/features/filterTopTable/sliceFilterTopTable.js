import { createSlice } from '@reduxjs/toolkit'

const sliceFilterTopTable = createSlice({
    name: 'filterToptable',
    initialState: {
        orderby: 'all',
        filter: false
    },
    reducers: {
        setorderby(state,action){
            state.orderby = action.payload;
        },
        setfilter(state,action){
            state.filter = action.payload;
        }
    }
});

export default sliceFilterTopTable.reducer

export const {setorderby,setfilter} = sliceFilterTopTable.actions

