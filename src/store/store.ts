import { configureStore } from '@reduxjs/toolkit'
import sliceFilterTopTable from '../features/filterTopTable/sliceFilterTopTable';
import dbSlice from '../features/db/dbSlice.js';
import NotificationSlice from '../features/TopMenu/NotificationSlice';
import menuSlice from '../features/db/menu/menuSlice';

export const store = configureStore({
    reducer: {
        filterToptable: sliceFilterTopTable,
        db: dbSlice,
        notification: NotificationSlice,
        menuSlice: menuSlice
    }
});

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']