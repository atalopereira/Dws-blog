import { useState, type ReactNode } from 'react';

import './styles.scss';

interface FilterItemProps {
  children: ReactNode;
}

export function FilterItem({ children }: FilterItemProps) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      className={`filter-item ${isSelected ? 'selected' : ''}`}
      onClick={() => setIsSelected(!isSelected)}
    >
      {children}
    </button>
  )
}