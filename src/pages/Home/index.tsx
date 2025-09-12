import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortButton } from '../../components/Buttons/SortButton';
import { Card } from '../../components/Card';
import { Dropdown } from '../../components/Dropdown';
import { FilterList } from '../../components/FilterList';
import { fetchPosts, selectPosts } from '../../store/postsSlice';
import type { AppDispatch } from '../../store/store';

import './styles.scss';

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

export function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])

  console.log(posts);

  return (
    <section className='blog-home'>
      <div className='blog-home__filters'>
        <h1 className='blog-home__title'>DWS blog</h1>
        <div className='blog-home__dropdowns'>
          <Dropdown title='Category' options={options} />
          <Dropdown title='Author' options={options} />
        </div>
        <div className='blog-home__sort-by'>
          <span className='blog-home__sort-by-label'>Sort by:</span>
          <SortButton />
        </div>
      </div>

      <div className='blog-home__content'>
        <div className='blog-home__wrapper-filter-list'>
          <FilterList />
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