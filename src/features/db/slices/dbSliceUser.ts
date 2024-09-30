import { CaseReducer, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { dbThunkUser } from '../thunks/dbThunkUsers';
import Employee from '../../../class/CEmployee';

export interface interfaceState {
    status: 'idle' | 'fulfilled' | 'rejected' | 'pending',
    data: Employee[],
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
        builder.addCase(dbThunkUser.pending, (state:any) => {
            state.status = 'pending';
        });
        builder.addCase(dbThunkUser.fulfilled, (state:any, action) => {
            state.data = action.payload;
            state.status = 'fulfilled';
        });
        builder.addCase(dbThunkUser.rejected, (state:any, action) => {
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