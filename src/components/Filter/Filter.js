import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from './Filter.module.css';

const Filter = () => {
  const [userId, setUserId] = useState('');
  const [posts, setPosts] = useState([]);
  const [filterArray, setFilterArray] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await Axios('https://jsonplaceholder.typicode.com/posts/');
    setPosts(result.data);
  };

  const handleChange = e => {
    let num = Number(e.currentTarget.value);
    setUserId(num);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const filterPost = posts.filter(post => post.userId === userId);
    setFilterArray(filterPost);
  };

  return (
    <>
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <button className={styles.searchFormBtn} type="submit">
            <span className={styles.searchFormBtnLabel}>OK</span>
          </button>

          <input
            className={styles.searchFormInput}
            onChange={handleChange}
            type="text"
            value={userId}
            autoComplete="off"
            autoFocus
            placeholder="Search post "
          />
        </form>
      </header>
      <ul className={styles.tilesWrap}>
        {filterArray.map(post => (
          <li className={styles.tilesWrap_list} key={post.id}>
            <h2 className={styles.titleId}>{post.id}</h2>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.description}>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Filter;
