import React from 'react';

import Image from 'next/image';

import styles from './styles.module.css';

const Home = () => {
  return (
    <div className={styles['page']}>
      <div className={styles['bg-image__wrapper']}>
        <Image
          src='/background.jpg'
          alt='Background Image'
          quality={80}
          width={1920}
          height={1080}
          className={styles['bg-image']}
        />
      </div>
      <div className={styles['content']}>
        <div className={styles['personal-info']}>
          <h4 className={styles['hello']}>Hello All. I am</h4>
          <h1 className={styles['name']}>Roswaldo Flores</h1>
          <h3 className={styles['work']}>Web Developer</h3>
        </div>

        <div className={styles['github-info']}>
          <p className={styles['comments']}>
            // you can also see it on my Github page
          </p>
          <div>
            <span className={styles['const']}>const </span>
            <span className={styles['variable']}>gitHubLink</span> = '
            <a
              className={styles['github-link']}
              href='https://github.com/ImRSF07/portfolio-site'
            >
              https://github.com/ImRSF07/portfolio-site
            </a>
            '
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
