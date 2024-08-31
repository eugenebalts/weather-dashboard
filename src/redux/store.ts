import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './slices/search/searchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
