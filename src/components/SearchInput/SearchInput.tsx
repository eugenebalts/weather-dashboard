import { ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchInputProps } from './SearchInput.types';
import styles from './SearchInput.module.scss';

const SearchInput = ({ placeholder, onSearch }: SearchInputProps) => {
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <FiSearch />
      <input
        className={styles.input}
        type='search'
        placeholder={placeholder}
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default SearchInput;
