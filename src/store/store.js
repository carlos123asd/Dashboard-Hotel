import { configureStore } from '@reduxjs/toolkit'
import sliceFilterTopTable from '../features/filterTopTable/sliceFilterTopTable';
import dbSlice from '../features/db/dbSlice.js';
import NotificationSlice from '../features/TopMenu/NotificationSlice.js';
import menuSlice from '../features/db/menu/menuSlice.js';

export const store = configureStore({
    reducer: {
        filterToptable: sliceFilterTopTable,
        db: dbSlice,
        notification: NotificationSlice,
        menuSlice: menuSlice
    }
});