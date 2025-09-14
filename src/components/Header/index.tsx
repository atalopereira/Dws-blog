import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from '../searchBar';
import { SearchBarMobile } from '../searchBarMobile';
import { useDebounce } from '../../hooks/useDebounce';
import { setSearch } from '../../store/filtersSlice';
import type { AppDispatch } from '../../store/store';

import './styles.scss';

export function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const [searching, setSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(setSearch(debouncedSearchValue))
  }, [debouncedSearchValue])

  function handleChangeOpenSearch() {
    setSearching(!searching);
    setSearchValue('');
  }

  function handleSearch(value: string) {
    setSearchValue(value);
  }

  return (
    <header className='header'>
      {!searching && (
        <div className='wrapper-logo'>
          <h2>dentsu</h2>
          <span>world services</span>
        </div>
      )}
      <SearchBarMobile
        isSearching={searching}
        changeOpen={handleChangeOpenSearch}
        value={searchValue}
        onChange={handleSearch}
      />
      <SearchBar
        value={searchValue}
        onChange={handleSearch}
      />
    </header>
  )
}