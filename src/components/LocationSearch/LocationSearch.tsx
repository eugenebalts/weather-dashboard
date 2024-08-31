import { ChangeEvent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { AppDispatch, RootState } from '../../redux/store';
import { searchActions } from '../../redux/slices/search/searchSlice';
import getCoordinates from '../../redux/slices/search/actions';
import useDebounce from '../../hooks/useDebounce';
import { GeocodingResponse } from '../../services/endpoints/geocoding/types';
import Button from '../Button/Button';
import styles from './LocationSearch.module.scss';

const LocationSearch = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { suggestions, search } = useSelector((state: RootState) => state.search);
  const dispatch: AppDispatch = useDispatch();

  const debouncedSearch = useDebounce((value: string) => {
    if (value) {
      return dispatch(getCoordinates(value));
    }

    return dispatch(searchActions.clearSuggestions());
  }, 500);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(searchActions.updateSearch(value));
    debouncedSearch(value);
  };

  const handleClickSuggestion = (suggestion: GeocodingResponse) => {
    console.log(`suggestion ${suggestion}`); // TODO: SET CURRENT WEATHER IN STORE

    dispatch(searchActions.updateSearch(''));
    dispatch(searchActions.clearSuggestions());
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (!inputRef.current?.contains(document.activeElement)) {
        setIsMenuOpen(false);
      }
    }, 100);
  };

  const handleFocus = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <FiSearch />
        <input
          ref={inputRef}
          className={styles.input}
          type='search'
          placeholder='Enter Location'
          onChange={handleChangeInput}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={search}
        />
      </div>
      {isMenuOpen && !!suggestions.length && (
        <div className={styles.suggestions}>
          {suggestions.map((suggestion) => (
            <Button
              key={suggestion.name + suggestion.lat}
              variant='text'
              color='secondary'
              onClick={() => handleClickSuggestion(suggestion)}
            >
              {suggestion.name}, {suggestion.country}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
