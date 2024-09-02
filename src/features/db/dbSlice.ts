import { createSlice} from '@reduxjs/toolkit'
import { dbThunk } from './dbThunk';

const dbSlice = createSlice({
    name: 'db',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
        update: false
    },
    reducers:{
        setOrderData(state:any,action){
             state.data = action.payload.sort((a:any, b:any) => Number(b.roomNumber) - Number(a.roomNumber))
        },
        updateDataRoom(state:any,action){
            state.data.rooms = action.payload
        },
        updateDataBooking(state:any,action){
            state.data.bookings = action.payload
        },
        update(state){
            state.update = true
        }
    },
    extraReducers: (builder) => {
        builder.addCase(dbThunk.pending, (state:any) => {
            state.status = 'pending';
        });
        builder.addCase(dbThunk.fulfilled, (state:any, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(dbThunk.rejected, (state:any, action) => {
            state.error = action.error;
            state.status = 'rejected';
        });
    }
});

export default dbSlice.reducer;

export const { setOrderData,updateDataRoom,updateDataBooking,update } = dbSlice.actions