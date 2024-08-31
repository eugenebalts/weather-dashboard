import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import SearchInput from './components/SearchInput/SearchInput';
import { AppDispatch, RootState } from './redux/store';
import getCoordinates from './redux/slices/search/actions';
import { searchActions } from './redux/slices/search/searchSlice';
import useDebounce from './hooks/useDebounce';
import styles from './App.module.scss';

const App = () => {
  const { suggestions, search } = useSelector((state: RootState) => state.search);
  const dispatch: AppDispatch = useDispatch();

  const debouncedSearch = useDebounce((value: string) => {
    dispatch(searchActions.updateSearch(value));

    if (value) {
      return dispatch(getCoordinates(value));
    }

    return dispatch(searchActions.clearSuggestions());
  }, 500);

  return (
    <DefaultLayout>
      <div className={styles.wrapper}>
        <SearchInput placeholder='Enter city' onSearch={(value) => debouncedSearch(value)} />
        <div>
          {suggestions.map(({ name, country }) => (
            <div key={name}>
              {name}, {country}
            </div>
          ))}
        </div>
        {!search && <p>Favorite cities</p>}
      </div>
    </DefaultLayout>
  );
};

export default App;
