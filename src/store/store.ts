import { configureStore } from '@reduxjs/toolkit'
import sliceFilterTopTable from '../features/filterTopTable/sliceFilterTopTable';
import dbSliceRoom from '../features/db/slices/dbSliceRoom';
import dbSliceBooking from '../features/db/slices/dbSliceBooking';
import dbSliceMessage from '../features/db/slices/dbSliceMessage';
import dbSliceUser from '../features/db/slices/dbSliceUser';
import NotificationSlice from '../features/TopMenu/NotificationSlice';
import menuSlice from '../features/db/menu/menuSlice';

export const store = configureStore({
    reducer: {
        filterToptable: sliceFilterTopTable,
        dbRoom: dbSliceRoom,
        dbBooking: dbSliceBooking,
        dbMessage: dbSliceMessage,
        dbUser: dbSliceUser,
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