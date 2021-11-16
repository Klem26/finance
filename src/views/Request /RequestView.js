import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Filter from '../../components/Filter';
import styles from './RequestView.module.css';

const RequestView = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await Axios(
      'https://jsonplaceholder.typicode.com/posts/?_limit=10',
    );
    setPosts(result.data);
  };

  return (
    <div className={styles.wrapper}>
      <Filter />
      <h1 className={styles.title}>Posts</h1>
      <div className={styles.container}>
        <ul className={styles.articles__list}>
          {posts.length > 0 &&
            posts.map(post => (
              <li className={styles.articles__list_item} key={post.id}>
                <h2 className={styles.title_h2}>{post.title}</h2>
                <p className={styles.description}> {post.body}</p>
              </li>
            ))}
        </ul>
      </div>{' '}
    </div>
  );
};

export default RequestView;
