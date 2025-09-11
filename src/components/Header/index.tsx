import { useState } from 'react';
import { SearchBar } from '../searchBar';
import { SearchBarMobile } from '../searchBarMobile';

import './styles.scss';

export function Header() {
  const [searching, setSearching] = useState(false);

  function handleSearching() {
    setSearching(!searching);
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
        changeSearch={handleSearching}
      />
      <SearchBar />
    </header>
  )
}