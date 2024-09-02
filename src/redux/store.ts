import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from './slices/search/searchSlice';
import { weatherReducer } from './slices/weather/weatherSlice';
import { favoriteLocationsReducer } from './slices/favoriteLocations/favoriteLocationsSlice';
import localStorageMiddleware from './middlewars/localStorageMiddleware';

const store = configureStore({
  reducer: {
    search: searchReducer,
    weather: weatherReducer,
    favoriteLocations: favoriteLocationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
