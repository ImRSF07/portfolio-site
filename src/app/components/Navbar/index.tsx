import React from 'react';

import Link from 'next/link';

import styles from './styles.module.css';

const Navbar = () => {
  return (
    <nav className={styles['navbar']}>
      <ul className={styles['nav-links']}>
        <li className={`${styles['nav-link__wrapper']} ${styles['large']} `}>
          <Link
            className={`${styles['nav-link']} ${styles['my-name']}`}
            href='/'
          >
            &copy; Roswaldo Flores
          </Link>
        </li>
        <li className={styles['nav-link__wrapper']}>
          <Link className={styles['nav-link']} href='/about'>
            _about-me
          </Link>
        </li>
        <li className={styles['nav-link__wrapper']}>
          <Link className={styles['nav-link']} href='/projects'>
            _projects
          </Link>
        </li>
        <li className={styles['nav-link__wrapper']}>
          <Link className={styles['nav-link']} href='/clients'>
            _clients
          </Link>
        </li>
        <li className={styles['nav-link__wrapper']}>
          <Link className={styles['nav-link']} href='/contact'>
            _contact-me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
