import type { Post } from '../../types';
import { Tag } from '../Tag';
import { useFormattedDate } from '../../hooks/useFormattedDate';

import './styles.scss';

interface CardProps {
  post: Post;
}

export function Card({ post }: CardProps) {
  const { author, title, content, categories, createdAt, thumbnail_url } = post;
  const formattedDate = useFormattedDate(createdAt);

  return (
    <div className="article-card">
      <img src={thumbnail_url} alt="Article image" />
      <div className='content-card'>
        <div className='info-article'>
          <span>{formattedDate}</span>
          <div className="divider"/>
          <span>{author.name}</span>
        </div>

        <div className='title-subtitle'>
          <h3>{title}</h3>
          <span>{content}</span>
        </div>

        <div className='container-tags'>
          {categories.map(category => (
            <Tag key={category.id} tagTitle={category.name} />
          ))}
        </div>
      </div>
    </div>
  )
}