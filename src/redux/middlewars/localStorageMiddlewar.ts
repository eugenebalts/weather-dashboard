import { Middleware } from '@reduxjs/toolkit';
import { favoriteLocationsActions } from '../slices/favoriteLocations/favoriteLocationsSlice';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    favoriteLocationsActions.addLocation.match(action) ||
    favoriteLocationsActions.removeLocation.match(action)
  ) {
    const state = store.getState().favoriteLocations;

    localStorage.setItem('favoriteLocations', JSON.stringify(state.favoriteLocations));
  }

  return result;
};

export default localStorageMiddleware;
