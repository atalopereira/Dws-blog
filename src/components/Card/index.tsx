import { Tag } from '../Tag';
import './styles.scss';

export function Card() {
  return (
    <div className="article-card">
      <img src="/src/assets/img-card.jpg" alt="Article image" />
      <div className='content-card'>
        <div className='info-article'>
          <span>Jan 20, 2024</span>
          <div className="divider"/>
          <span>Author Lastname</span>
        </div>

        <div className='title-subtitle'>
          <h3>This is the title of the article with two lines</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum est nisi, semper in gravida sed, egestas in nibh. Donec ultricies pellentesque mauris. </span>
        </div>

        <div className='container-tags'>
          <Tag tagTitle="Category 1" />
          <Tag tagTitle="Category 2" />
        </div>
      </div>
    </div>
  )
}