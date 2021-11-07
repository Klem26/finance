import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import routes from '../../routes/routes';

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink to={routes.users} className={styles.link}>
      Calculate
    </NavLink>
    <NavLink to={routes.request} className={styles.link}>
      Request
    </NavLink>
    <NavLink exact to={routes.login} className={styles.link}>
      Login
    </NavLink>
  </nav>
);
export default Navigation;
