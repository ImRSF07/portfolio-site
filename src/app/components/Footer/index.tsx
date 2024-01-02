import React from 'react';

import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <ul className={styles['footer-links']}>
        <li className={styles['footer-link']}>find me in: </li>
        <li className={styles['footer-link']}>
          <span>
            <a href='https://github.com/roswaldo-flores'>IMG</a>
          </span>
        </li>
        <li className={styles['footer-link']}>LinkedIn </li>
        <li className={styles['footer-link']}>Available for work! </li>
      </ul>
      <ul className={`${styles['footer-links']} ${styles['reverse']}`}>
        <li className={styles['footer-link']}>
          <span>
            <a href='https://github.com/roswaldo-flores'>IMG ImRSF07</a>
          </span>
        </li>
        <li className={styles['footer-link']}>
          <p>Special thanks to: </p>&nbsp;
          <a href='https://www.behance.net/darelova'>Yanka Darelova</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
