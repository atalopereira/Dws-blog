import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { PostInfo } from '../../components/PostInfo';
import { Card } from '../../components/Card';
import { Loading } from '../../components/Loading';
import { useLatestPosts } from '../../hooks/useLatestPosts';
import { addSelectedPost, clearSelectedPost, fetchPostById, fetchPosts, selectPosts, selectSelectedPost } from '../../store/postsSlice';
import type { AppDispatch } from '../../store/store';

import './styles.scss';

export function PostDetail() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams();
  const posts = useSelector(selectPosts);
  const post = useSelector(selectSelectedPost);
  const latestPosts = useLatestPosts(posts, 3);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const currentPost = posts.find(post => post.id === id);
      dispatch(addSelectedPost(currentPost))
      return;
    }
    if (!post && id) {
      dispatch(fetchPostById(id))
      dispatch(fetchPosts())
    }
  }, [id])

  function handleBackButton() {
    dispatch(clearSelectedPost())
    navigate('/');
  }

  function handleLastPost(postId: string) {
    navigate(`/post/${postId}`)
  }

  if (!post) {
    return <Loading />;
  }

  return (
    <section className='post-detail'>
      <div className='post-detail__header'>
        <SecondaryButton onClick={handleBackButton}>Back</SecondaryButton>
      </div>

      <div className='post-detail__content'>
        <div className='post-detail__wrapper-title'>
          <h1>{post.title}</h1>
        </div>

        <div className='post-detail__wrapper-post-info'>
          <PostInfo
            profilePicture={post.author.profilePicture}
            name={post.author.name}
            createdAt={post.author.createdAt}
          />
        </div>

        <div className='post-detail__content-article'>
          <img
            src={post.thumbnail_url}
            alt='Article image'
            className='post-detail__image'
          />
          <article className='post-detail__article-text'>
            {post.content}
          </article>
        </div>

        <hr className='post-detail__horizontal-line' />

        <div className='post-detail__wrapper-last-articles-title'>
          <h2>Last articles</h2>
        </div>

        <div className='post-detail__wrapper-cards'>
          {latestPosts.map(post => (
            <Card
              key={post.id}
              post={post}
              onClick={() => handleLastPost(post.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}