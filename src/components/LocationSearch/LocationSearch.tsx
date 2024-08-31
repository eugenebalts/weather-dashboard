import { ChangeEvent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { AppDispatch, RootState } from '../../redux/store';
import { searchActions } from '../../redux/slices/search/searchSlice';
import getCoordinates from '../../redux/slices/search/actions';
import useDebounce from '../../hooks/useDebounce';
import { GeocodingResponse } from '../../services/endpoints/geocoding/types';
import Button from '../Button/Button';
import getCurrentWeather from '../../redux/slices/weather/actions';
import useClickOutside from '../../hooks/useClickOutside';
import getLocationName from '../../utils/getLocationName';
import styles from './LocationSearch.module.scss';

const LocationSearch = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { suggestions } = useSelector((state: RootState) => state.search);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch: AppDispatch = useDispatch();

  useClickOutside(wrapperRef, () => {
    setIsMenuOpen(false);
  });

  const debouncedSearch = useDebounce((value: string) => {
    if (value) {
      return dispatch(getCoordinates(value));
    }

    return dispatch(searchActions.clearSuggestions());
  }, 500);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    debouncedSearch(value);
  };

  const handleClickSuggestion = (suggestion: GeocodingResponse) => {
    const { lat, lon } = suggestion;

    dispatch(getCurrentWeather({ lat, lon }));

    setIsMenuOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div className={styles.search}>
        <FiSearch />
        <input
          ref={inputRef}
          className={styles.input}
          type='search'
          placeholder='Enter Location'
          onChange={handleChangeInput}
          onFocus={() => setIsMenuOpen(true)}
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
              {getLocationName(suggestion.name, suggestion.country)}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
