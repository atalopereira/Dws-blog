import { useEffect, useState, type FormEvent } from "react";
import { SlidersHorizontal } from "lucide-react";
import { FilterItem } from "../FilterItem";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import type { OptionItem, FilterListItems } from "../../types";

import './styles.scss';

interface FilterListProps {
  authors: OptionItem[]
  categories: OptionItem[];
  authorsSelected: OptionItem[];
  categoriesSelected: OptionItem[];
  onChange: (filters: FilterListItems) => void;
}

interface FiltersState {
  categories: OptionItem[],
  authors: OptionItem[]
}

export function FilterList({ authors, categories, categoriesSelected, authorsSelected, onChange }: FilterListProps) {
  const [filters, setFilters] = useState({ categories: categoriesSelected, authors: authorsSelected });
  const categoryIdsSelected = filters.categories.map(categorie => categorie.id);
  const authorsIdsSelected = filters.authors.map(author => author.id);

  useEffect(() => {
    setFilters({
      categories: categoriesSelected,
      authors: authorsSelected
    })
  }, [authorsSelected, categoriesSelected])

  function toggleItemInArray(filters: FiltersState, item: OptionItem, key: keyof FiltersState) {
    const alreadySelected = filters[key].some(filter => filter.id === item.id);

    if (alreadySelected) {
      const filterWithoutItem = filters[key].filter(filter => filter.id !== item.id);
      return {
        ...filters,
        [key]: filterWithoutItem
      }
    }
    return {
      ...filters,
      [key]: [
        ...filters[key],
        item
      ]
    };
  }

  function handleChangeFilter(type: 'category' | 'author', item: OptionItem) {
    if (type === 'category') {
      const newFilter = toggleItemInArray(filters, item, 'categories');
      setFilters(newFilter);
      return;
    }

    if (type === 'author') {
      const newFilter = toggleItemInArray(filters, item, 'authors');
      setFilters(newFilter);
      return;
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onChange(filters)
  }

  return (
    <form className="filter-list" onSubmit={handleSubmit}>
      <div className="filter-list__header">
        <SlidersHorizontal />
        <h2 className="filter-list__title">Filters</h2>
      </div>

      <div className="filter-list__items-section">
        <h3>Category</h3>
        <div className="filter-list__items">
          {categories.map(category => (
            <FilterItem
              key={category.id}
              content={category.name}
              isSelected={categoryIdsSelected.includes(category.id)}
              onClick={() => handleChangeFilter('category', category)}
            />
          ))}
        </div>
      </div>

      <div className="filter-list__items-section">
        <h3>Author</h3>
        <div className="filter-list__items">
          {authors.map(author => (
            <FilterItem
              key={author.id}
              content={author.name}
              isSelected={authorsIdsSelected.includes(author.id)}
              onClick={() => handleChangeFilter('author', author)}
            />
          ))}
        </div>
      </div>

      <PrimaryButton type="submit">Apply filters</PrimaryButton>
    </form>
  )
}