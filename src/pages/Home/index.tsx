import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortButton } from '../../components/Buttons/SortButton';
import { Card } from '../../components/Card';
import { Dropdown } from '../../components/Dropdown';
import { FilterList } from '../../components/FilterList';
import { fetchPosts, selectPosts } from '../../store/postsSlice';
import { fetchAuthors, selectAuthors } from '../../store/authorsSlice';
import { fetchCategories, selectCategories } from '../../store/categoriesSlice';
import type { AppDispatch } from '../../store/store';

import './styles.scss';

export function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);
  const authors = useSelector(selectAuthors);
  const categories = useSelector(selectCategories);

  const authorOptions = authors.map(author => ({ id: author.id, name: author.name }));
  const categoryOptions = categories.map(category => ({ id: category.id, name: category.name }));

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchAuthors());
    dispatch(fetchCategories());
  }, [dispatch])

  console.log(posts);

  return (
    <section className='blog-home'>
      <div className='blog-home__filters'>
        <h1 className='blog-home__title'>DWS blog</h1>
        <div className='blog-home__dropdowns'>
          <Dropdown title='Category' options={categoryOptions} />
          <Dropdown title='Author' options={authorOptions} />
        </div>
        <div className='blog-home__sort-by'>
          <span className='blog-home__sort-by-label'>Sort by:</span>
          <SortButton />
        </div>
      </div>

      <div className='blog-home__content'>
        <div className='blog-home__wrapper-filter-list'>
          <FilterList authors={authors} categories={categories} />
        </div>
        <div className='blog-home__cards'>
          {posts.map(post => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}