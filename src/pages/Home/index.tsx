import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortButton } from '../../components/Buttons/SortButton';
import { Card } from '../../components/Card';
import { Dropdown } from '../../components/Dropdown';
import { FilterList } from '../../components/FilterList';
import { fetchPosts, selectPosts } from '../../store/postsSlice';
import { fetchAuthors, selectAuthors } from '../../store/authorsSlice';
import { fetchCategories, selectCategories } from '../../store/categoriesSlice';
import type { OptionItem, FilterListItems } from '../../types';
import type { AppDispatch } from '../../store/store';
import { selectFilters, setAuthorsFilter, setCategoriesFilter } from '../../store/filtersSlice';
import { useFilteredPosts } from '../../hooks/useFilteredPosts';

import './styles.scss';

export function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);
  const authors = useSelector(selectAuthors);
  const categories = useSelector(selectCategories);
  const filters = useSelector(selectFilters);

  const authorOptions = authors.map(author => ({ id: author.id, name: author.name }));
  const categoryOptions = categories.map(category => ({ id: category.id, name: category.name }));

  const filteredPosts = useFilteredPosts(posts, filters);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchAuthors());
    dispatch(fetchCategories());
  }, [dispatch])

  function handleCategory(selectedCategories: OptionItem[]) {
    dispatch(setCategoriesFilter(selectedCategories));
  }

  function handleAuthor(selectedAuthors: OptionItem[]) {
    dispatch(setAuthorsFilter(selectedAuthors));
  }

  function handleFilterList(filterItems: FilterListItems) {
    dispatch(setCategoriesFilter(filterItems.categories));
    dispatch(setAuthorsFilter(filterItems.authors));
  }

  return (
    <section className='blog-home'>
      <div className='blog-home__filters'>
        <h1 className='blog-home__title'>DWS blog</h1>
        <div className='blog-home__dropdowns'>
          <Dropdown
            title='Category'
            options={categoryOptions}
            selectedOptions={filters.categories}
            onChange={handleCategory}
          />
          <Dropdown
            title='Author'
            options={authorOptions}
            selectedOptions={filters.authors}
            onChange={handleAuthor}
          />
        </div>
        <div className='blog-home__sort-by'>
          <span className='blog-home__sort-by-label'>Sort by:</span>
          <SortButton />
        </div>
      </div>

      <div className='blog-home__content'>
        <div className='blog-home__wrapper-filter-list'>
          <FilterList
            authors={authors}
            categories={categoryOptions}
            authorsSelected={filters.authors}
            categoriesSelected={filters.categories}
            onChange={handleFilterList}
          />
        </div>
        <div className='blog-home__cards'>
          {filteredPosts.map(post => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}