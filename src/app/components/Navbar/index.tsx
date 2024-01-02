import React from 'react';

import styles from './styles.module.css';

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <ul className={styles['nav-links']}>
        <li className={`${styles['nav-link__wrapper']} ${styles['large']} `}>
          <a className={styles['nav-link']} href='#'>roswaldo-flores</a>
        </li>
        <li className={styles['nav-link__wrapper']}>
          <a className={styles['nav-link']} href='#'>_about-me</a>
        </li>
        <li className={styles['nav-link__wrapper']}>
          <a className={styles['nav-link']} href='#'>_projects</a>
        </li>
        <li className={styles['nav-link__wrapper']}>
          <a className={styles['nav-link']} href='#'>_clients</a>
        </li>
        <li className={styles['nav-link__wrapper']}>
          <a className={styles['nav-link']} href='#'>_contact-me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
