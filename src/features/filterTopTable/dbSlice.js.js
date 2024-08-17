import { createSlice} from '@reduxjs/toolkit'
import { dbThunk } from './dbThunk';

const dbSlice = createSlice({
    name: 'db',
    initialState: {
        status: 'idle',
        data: [],
        error: null,
    },
    reducers:{
        setOrderData(state,action){
             state.data = action.payload.sort((a, b) => parseInt(b.roomNumber) - parseInt(a.roomNumber))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(dbThunk.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(dbThunk.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(dbThunk.rejected, (state, action) => {
            state.error = action.error;
            state.status = 'rejected';
        });
    }
});

export default dbSlice.reducer;

export const { setOrderData } = dbSlice.actions