import './styles.scss';

interface FilterItemProps {
  content: string;
  isSelected: boolean;
  onClick: () => void;
}

export function FilterItem({ content, isSelected, onClick }: FilterItemProps) {
  return (
    <button
      type='button'
      className={`filter-item ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {content}
    </button>
  )
}