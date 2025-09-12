import { useState } from 'react';

import './styles.scss';

interface FilterItemProps {
  content: string;
}

export function FilterItem({ content }: FilterItemProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      className={`filter-item ${isSelected ? 'selected' : ''}`}
      onClick={() => setIsSelected(!isSelected)}
    >
      {content}
    </button>
  )
}