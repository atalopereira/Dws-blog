import { Search } from 'react-feather';

import './styles.scss';

export function SearchBar() {
  return (
    <div className='search-bar'>
      <input type="text" placeholder="Search..." />
      <button>
        <Search className='search-icon' />
      </button>
    </div>
  )
}