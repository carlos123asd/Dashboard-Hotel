import { CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { dbThunkRoom } from '../thunks/dbThunkRoom';
import Room from '../../../class/CRoom';

export interface interfaceState {
    status: 'idle' | 'fulfilled' | 'rejected' | 'pending',
    data: Room[],
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
type functionUpdate = (state:any) => (void);

type State = any
const setOrderData: CaseReducer<State, PayloadAction<any>> = (state, action) => {
    state.data = action.payload.sort((a:any, b:any) => Number(b.roomNumber) - Number(a.roomNumber))
}
const update:CaseReducer<State> = (state) => {
    state.update = true
}

const dbSlice = createSlice({
    name: 'db',
    initialState,
    reducers:{
        setOrderData,
        update
    },
    extraReducers: (builder) => {
        builder.addCase(dbThunkRoom.pending, (state:any) => {
            state.status = 'pending';
        });
        builder.addCase(dbThunkRoom.fulfilled, (state:any, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(dbThunkRoom.rejected, (state:any, action) => {
            state.error = action.error;
            state.status = 'rejected';
        });
    }
});

export default dbSlice.reducer;
export const { 
    setOrderData:functionOrderData,
    update:functionUpdate 
} = dbSlice.actions