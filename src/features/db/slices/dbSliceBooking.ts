import { CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { dbThunkBooking } from '../thunks/dbThunkBooking';
import Booking from '../../../class/CBooking';

export interface interfaceState {
    status: 'idle' | 'fulfilled' | 'rejected' | 'pending',
    data: Booking[],
    error: string | null,
    update: boolean
}

const initialState:interfaceState = {
    status: 'idle',
    data: [],
    error: null,
    update: false
}

type functionUpdateDataBooking = (state:any,action:Booking[]) => (void);
type functionUpdate = (state:any) => (void);

type State = any
const updateDataBooking: CaseReducer<State, PayloadAction<Booking[]>> = (state, action) => {
    state.data = action.payload
}
const update:CaseReducer<State> = (state) => {
    state.update = true
}

const dbSlice = createSlice({
    name: 'db',
    initialState,
    reducers:{
        updateDataBooking,
        update
    },
    extraReducers: (builder) => {
        builder.addCase(dbThunkBooking.pending, (state:any) => {
            state.status = 'pending';
        });
        builder.addCase(dbThunkBooking.fulfilled, (state:any, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(dbThunkBooking.rejected, (state:any, action) => {
            state.error = action.error;
            state.status = 'rejected';
        });
    }
});

export default dbSlice.reducer;
export const { 
    updateDataBooking:functionUpdateDataBooking,
    update:functionUpdate 
} = dbSlice.actions