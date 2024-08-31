import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './slices/search/searchSlice';
import { weatherReducer } from './slices/weather/weatherSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
