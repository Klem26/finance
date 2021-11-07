import React, { Component } from 'react';
import Axios from 'axios';
import styles from './Filter.module.css';

class Filter extends Component {
  state = {
    UserId: null,
    posts: [],
    filterArray: [],
  };
  async componentDidMount() {
    const response = await Axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
    );
    this.setState({ posts: response.data });
  }

  handleChange = e => {
    console.log(e);
    let num = Number(e.currentTarget.value);
    this.setState({ UserId: num });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.UserId);

    const filterPost = this.state.posts.filter(
      post => post.userId === this.state.UserId,
    );
    this.setState({ filterArray: filterPost });
    console.log(filterPost);
  };

  render() {
    return (
      <>
        <header className={styles.searchbar}>
          <form className={styles.searchForm} onSubmit={this.handleSubmit}>
            <button className={styles.searchFormBtn} type="submit">
              <span className={styles.searchFormBtnLabel}>OK</span>
            </button>

            <input
              className={styles.searchFormInput}
              value={this.state.value}
              onChange={this.handleChange}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search post "
            />
          </form>
        </header>
        <ul className={styles.tilesWrap}>
          {this.state.filterArray.map(post => (
            <li className={styles.tilesWrap_list} key={post.id}>
              <h2 className={styles.titleId}>{post.id}</h2>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.description}>{post.body}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default Filter;
