import { Search } from 'lucide-react';

import './styles.scss';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button>
        <Search className='search-icon' />
      </button>
    </div>
  )
}