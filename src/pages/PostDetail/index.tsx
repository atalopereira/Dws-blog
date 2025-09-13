import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { PostInfo } from '../../components/PostInfo';
import { addSelectedPost, clearSelectedPost, fetchPostById, selectPosts, selectSelectedPost } from '../../store/postsSlice';
import type { AppDispatch } from '../../store/store';

import './styles.scss';

export function PostDetail() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams();
  const posts = useSelector(selectPosts);
  const post = useSelector(selectSelectedPost);
  console.log(id, post, posts)

  useEffect(() => {
    if (posts && posts.length > 0) {
      const currentPost = posts.find(post => post.id === id);
      dispatch(addSelectedPost(currentPost))
      return;
    }
    if (!post && id) {
      dispatch(fetchPostById(id))
    }
  }, [])

  function handleBackButton() {
    dispatch(clearSelectedPost())
    navigate('/');
  }

  if (!post) {
    return <section>Loading...</section>
  }

  return (
    <section className='post-detail'>
      <div className='post-detail__header'>
        <SecondaryButton onClick={handleBackButton}>Back</SecondaryButton>
      </div>

      <div className='post-detail__wrapper-title'>
        <h2>{post.title}</h2>
      </div>

      <div className='post-detail__wrapper-post-info'>
        <PostInfo
          profilePicture={post.author.profilePicture}
          name={post.author.name}
          createdAt={post.author.createdAt}
        />
      </div>

      <div className='post-detail__content'>
        <img
          src={post.thumbnail_url}
          alt='Article image'
          className='post-detail__image'
        />
        <article className='post-detail__article-text'>
          {post.content}
        </article>
      </div>
    </section>
  )
}