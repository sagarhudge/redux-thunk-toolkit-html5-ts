import React, { useEffect, useState, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, addPost } from './features/posts/postsSlice';
import type { RootState, AppDispatch } from './features/posts/store';
import type { Post } from './features/posts/types';
import './Posts.css';

const Posts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.posts);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      const newPost: Post = { title, body };
      dispatch(addPost(newPost));
      setTitle('');
      setBody('');
    }
  };

  return (
    <main>
      <header className="page-header">
        <h4>📄Create Blog Posts using redux thunk toolkit</h4>
      </header>

      <section>
        <form onSubmit={handleSubmit} className="post-form">
          <fieldset>
            <legend>Add New Post</legend>

            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter post title"
            />

            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              placeholder="Enter post content"
            ></textarea>

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </section>

      {loading && <progress max={100}>Loading...</progress>}
      {error && <p className="error-text">Error: {error}</p>}

      <section>
        <article className="post-list">
          <ul>
            {items.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <footer className="footer">
        <p>© 2025 Sagar Hudge Blog</p>
      </footer>
    </main>
  );
};

export default Posts;
