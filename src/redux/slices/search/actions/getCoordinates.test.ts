import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import getCoordinates from '.';
import geocodingApi from '../../../../services/endpoints/geocoding/geocodingApi';
import { searchReducer } from '../searchSlice';
import { RootState } from '../../../store';

jest.mock('../../../../services/endpoints/geocoding/geocodingApi', () => ({
  getCoordinates: jest.fn(),
}));

describe('getCoordinates thunk', () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        search: searchReducer,
      },
    });
  });

  it('dispatches getCoordinates and handles success', async () => {
    const mockData = [
      { name: 'Test City', lat: 12.34, lon: 56.78, local_names: [], country: 'Test Country', state: 'Test State' },
    ];

    (geocodingApi.getCoordinates as jest.Mock).mockResolvedValue(mockData);

    await store.dispatch(getCoordinates('Test City') as any);

    const state = store.getState() as RootState;
    expect(state.search.suggestions).toEqual(mockData);
  });

  it('dispatches getCoordinates and handles error', async () => {
    (geocodingApi.getCoordinates as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    await store.dispatch(getCoordinates('Test City') as any);

    const state = store.getState() as RootState;
    expect(state.search.suggestions).toEqual([]);
  });
});
