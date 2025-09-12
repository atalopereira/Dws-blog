import { SlidersHorizontal } from "lucide-react";
import { FilterItem } from "../FilterItem";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import type { Author, Category } from "../../types";

import './styles.scss';

interface FilterListProps {
  authors: Author[]
  categories: Category[];
}

export function FilterList({ authors, categories }: FilterListProps) {
  return (
    <div className="filter-list">
      <div className="filter-list__header">
        <SlidersHorizontal />
        <h2 className="filter-list__title">Filters</h2>
      </div>

      <div className="filter-list__items-section">
        <h3>Category</h3>
        <div className="filter-list__items">
          {categories.map(category => (
            <FilterItem key={category.id} content={category.name} />
          ))}
        </div>
      </div>

      <div className="filter-list__items-section">
        <h3>Author</h3>
        <div className="filter-list__items">
          {authors.map(author => (
            <FilterItem key={author.id} content={author.name} />
          ))}
        </div>
      </div>

      <PrimaryButton>Apply filters</PrimaryButton>
    </div>
  )
}