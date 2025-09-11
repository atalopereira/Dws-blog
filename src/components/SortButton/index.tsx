import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

import './styles.scss';

export function SortButton() {
  const [sort, setSort] = useState('newest_first');

  function handleSort() {
    setSort(sort === 'newest_first' ? 'oldest_first' : 'newest_first');
  }

  return (
    <button className="sort-button" onClick={handleSort}>
      <span>
        {sort === 'newest_first' ? 'Newest first' : 'Oldest first'}
      </span>
      <ArrowUpDown className="sort-icon"/>
    </button>
  );
}