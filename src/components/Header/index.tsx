import { SearchBar } from '../searchBar';
import './styles.scss';

export function Header() {
  return (
    <header className='header'>
      <div className='wrapper-logo'>
        <h2>dentsu</h2>
        <span>world services</span>
      </div>
      <SearchBar />
    </header>
  )
}