import { CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { dbThunk } from './dbThunk';
import Room from '../../class/Room';
import Booking from '../../class/Booking';
import Message from '../../class/Message';
import Employee from '../../class/Employee';

export interface interfaceState {
    status: 'idle' | 'fulfilled' | 'rejected' | 'pending',
    data: {rooms:Room[],bookings:Booking[],employee:Employee[],comment:Message[]} | [],
    error: string | null,
    update: boolean
}

const initialState:interfaceState = {
    status: 'idle',
    data: [],
    error: null,
    update: false
}

type functionOrderData = (state:any,action:any) => (void);
type functionUpdateDataRoom = (state:any,action:Room[]) => (void);
type functionUpdateDataBooking = (state:any,action:Booking[]) => (void);
type functionUpdate = (state:any) => (void);

type State = any
const setOrderData: CaseReducer<State, PayloadAction<any>> = (state, action) => {
    state.data = action.payload.sort((a:any, b:any) => Number(b.roomNumber) - Number(a.roomNumber))
}
const updateDataRoom: CaseReducer<State, PayloadAction<Room[]>> = (state, action) => {
    state.data.rooms = action.payload
}
const updateDataBooking: CaseReducer<State, PayloadAction<Booking[]>> = (state, action) => {
    state.data.bookings = action.payload
}
const update:CaseReducer<State> = (state) => {
    state.update = true
}

const dbSlice = createSlice({
    name: 'db',
    initialState,
    reducers:{
        setOrderData,
        updateDataRoom,
        updateDataBooking,
        update
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
export const { 
    setOrderData:functionOrderData,
    updateDataRoom:functionUpdateDataRoom,
    updateDataBooking:functionUpdateDataBooking,
    update:functionUpdate 
} = dbSlice.actions