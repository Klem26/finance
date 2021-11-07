import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const App = () => {
  return (
    <div className={styles.loader}>
      <Loader
        type="Bars"
        color="#004b9c"
        height={60}
        width={60}
        timeout={3000}
      />
    </div>
  );
};
export default App;
