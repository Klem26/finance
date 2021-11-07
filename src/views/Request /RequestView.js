import React, { Component } from 'react';
import Axios from 'axios';
import Filter from '../../components/Filter';
import styles from './RequestView.module.css';

class RequestView extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://jsonplaceholder.typicode.com/posts/?_limit=10',
    );
    this.setState({ posts: response.data });
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Posts</h1>
        <div className={styles.container}>
          <Filter />
          <ul className={styles.articles__list}>
            {this.state.posts.map(post => (
              <li className={styles.articles__list_item} key={post.id}>
                <h2 className={styles.title_h2}>{post.title}</h2>
                <p className={styles.description}> {post.body}</p>
              </li>
            ))}
          </ul>
        </div>{' '}
      </div>
    );
  }
}

export default RequestView;
