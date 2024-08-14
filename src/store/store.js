import { configureStore } from '@reduxjs/toolkit'
import sliceFilterTopTable from '../features/filterTopTable/sliceFilterTopTable';

export const store = configureStore({
    reducer: {
        filterToptable: sliceFilterTopTable
    }
});