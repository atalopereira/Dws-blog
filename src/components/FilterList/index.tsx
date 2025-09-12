import { SlidersHorizontal } from "lucide-react";
import { FilterItem } from "../FilterItem";
import { PrimaryButton } from "../Buttons/PrimaryButton";

import './styles.scss';

export function FilterList() {
  return (
    <div className="filter-list">
      <div className="filter-list__header">
        <SlidersHorizontal />
        <h2 className="filter-list__title">Filters</h2>
      </div>

      <div className="filter-list__items-section">
        <h3>Category</h3>
        <div className="filter-list__items">
          <FilterItem content="Category 1" />
          <FilterItem content="Category 2" />
          <FilterItem content="Category 3" />
          <FilterItem content="Category 4" />
        </div>
      </div>

      <div className="filter-list__items-section">
        <h3>Author</h3>
        <div className="filter-list__items">
          <FilterItem content="Author Lastname" />
          <FilterItem content="Author Lastname" />
          <FilterItem content="Author Lastname" />
          <FilterItem content="Author Lastname" />
        </div>
      </div>

      <PrimaryButton>Apply filters</PrimaryButton>
    </div>
  )
}