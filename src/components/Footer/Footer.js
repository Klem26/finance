import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.bottomNav}>
      <span className={styles.copyright}> © 2021 Time is money</span>
      <ul className={styles.social}>
        <li className={styles.item}>
          <a
            href="https://www.facebook.com/sgroshicomua"
            target="_blank"
            rel="nofollow"
          >
            <img
              src="https://sgroshi.com.ua/images/footer/facebook.png"
              alt="Facebook"
            />
          </a>
        </li>
        <li className={styles.item}>
          <a
            href="https://www.youtube.com/channel/UCdncfcYj9xakflSB1RUk-Zw"
            target="_blank"
            rel="nofollow"
          >
            <img
              src="https://sgroshi.com.ua/images/footer/youtube.png"
              alt="Youtube"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
