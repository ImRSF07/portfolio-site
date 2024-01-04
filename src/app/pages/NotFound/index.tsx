import React from 'react';

import styles from './styles.module.css';

import Link from 'next/link';

const NotFound = () => {
  return (
    <div className={styles['page']}>
      <div className={styles['content']}>
        <h1>Page Not Found :(</h1>
        <h4>Sorry, the page you are looking for does not exist.</h4>
        <Link href='/'>Go back to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
