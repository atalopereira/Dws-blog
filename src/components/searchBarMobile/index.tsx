import { Search, X, ArrowLeft } from 'react-feather';

import './styles.scss';
import { useState } from 'react';

interface SearchBarProps {
  isSearching: boolean;
  changeSearch: () => void;
}

export function SearchBarMobile({ isSearching, changeSearch }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState('')

  function handleExitSearch() {
    setSearchValue('');
    changeSearch();
  }

  return (
    <div className='search-bar-mobile'>
      {isSearching ? (
        <>
          <button className='arrow-button'>
            <ArrowLeft className='x-icon' onClick={handleExitSearch} />
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className='close-button'
            onClick={() => setSearchValue('')}
          >
            <X className='x-icon' />
          </button>
        </>
      ) : (
        <button
          className='search-button'
          onClick={changeSearch}
        >
          <Search className='search-icon-mobile' />
        </button>
      )}
    </div>
  )
}