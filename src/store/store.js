import { configureStore } from '@reduxjs/toolkit'
import sliceFilterTopTable from '../features/filterTopTable/sliceFilterTopTable';
import dbSlice from '../features/db/dbSlice.js';

export const store = configureStore({
    reducer: {
        filterToptable: sliceFilterTopTable,
        db: dbSlice
    }
});