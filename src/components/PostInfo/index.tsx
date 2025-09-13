import { useFormattedDate } from '../../hooks/useFormattedDate';
import './styles.scss';

interface PostInfoProps {
  profilePicture: string;
  name: string;
  createdAt: string;
}

export function PostInfo({ profilePicture, name, createdAt }: PostInfoProps) {
  const formattedDate = useFormattedDate(createdAt);

  return (
    <div className="post-info">
      <img
        src={profilePicture}
        alt='user-icon'
        className="post-info__image"
      />
      <div className="post-info__content">
        <div className="post-info__wrapper-text">
          Written by:
          <span className="post-info__author-name">{name}</span>
        </div>
        <span className="post-info__date">{formattedDate}</span>
      </div>
    </div>
  )
}