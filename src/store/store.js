import { configureStore } from '@reduxjs/toolkit'
import sliceFilterTopTable from '../features/filterTopTable/sliceFilterTopTable';
import dbSlice from '../features/filterTopTable/dbSlice.js';

export const store = configureStore({
    reducer: {
        filterToptable: sliceFilterTopTable,
        db: dbSlice
    }
});