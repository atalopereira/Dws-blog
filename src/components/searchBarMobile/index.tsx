import { Search, X, ArrowLeft } from 'lucide-react';

import './styles.scss';

interface SearchBarProps {
  value: string,
  isSearching: boolean;
  changeOpen: () => void;
  onChange: (value: string) => void;
}

export function SearchBarMobile({ value, isSearching, changeOpen, onChange }: SearchBarProps) {
  return (
    <div className='search-bar-mobile'>
      {isSearching ? (
        <>
          <button className='arrow-button'>
            <ArrowLeft className='x-icon' onClick={changeOpen} />
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            className='close-button'
            onClick={() => onChange('')}
          >
            <X className='x-icon' />
          </button>
        </>
      ) : (
        <button
          className='search-button'
          onClick={changeOpen}
        >
          <Search className='search-icon-mobile' />
        </button>
      )}
    </div>
  )
}