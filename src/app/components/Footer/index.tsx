'use client';

import React from 'react';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { GrStatusGoodSmall } from "react-icons/gr";

import styles from './styles.module.css';

const Footer = () => {
  const visitLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <footer className={styles['footer']}>
      <ul className={styles['footer-links']}>
        <li className={`${styles['footer-link']} ${styles['no-hover']}`}>
          find me in:{' '}
        </li>
        <li
          className={styles['footer-link']}
          onClick={() =>
            visitLink('mailto:iamrsf0795@gmail.com')
          }
        >
          <FaEnvelope />
        </li>
        <li
          className={styles['footer-link']}
          onClick={() =>
            visitLink('https://www.linkedin.com/in/roswaldo-flores-547716161/')
          }
        >
          <FaLinkedin />
        </li>
        <li className={`${styles['footer-link']} ${styles['no-hover']}`}>
          <GrStatusGoodSmall className={styles['footer-icon__status']} />
          &nbsp; Available for work!
        </li>
      </ul>
      <ul className={`${styles['footer-links']} ${styles['reverse']}`}>
        <li
          className={styles['footer-link']}
          onClick={() =>
            visitLink('https://github.com/ImRSF07')
          }
        >
          <FaGithub />
          <p>&nbsp; ImRSF07</p>
        </li>
        <li className={`${styles['footer-link']}`}>
          <p>Special thanks to: </p>&nbsp;
          <a className={styles['url']} href='https://www.behance.net/darelova'>Yanka Darelova</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
