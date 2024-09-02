import { searchReducer, searchActions } from './searchSlice';
import { SearchState } from './types';
import '@testing-library/jest-dom';

describe('searchSlice', () => {
  const initialState: SearchState = {
    suggestions: [],
  };

  it('should return the initial state', () => {
    expect(searchReducer(undefined, { type: '' })).toEqual(initialState);
  });

  it('should handle currectly clear suggestions', () => {
    const previousState: SearchState = {
      suggestions: [
        { name: 'Test City', lat: 12.34, lon: 56.78, local_names: [], country: 'Test Country', state: 'Test State' },
      ],
    };
    const newState = searchReducer(previousState, searchActions.clearSuggestions());
    expect(newState.suggestions).toEqual([]);
  });
});
