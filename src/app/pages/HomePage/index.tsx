import React from 'react';

import Image from 'next/image';

import styles from './styles.module.css';

import { Anton } from 'next/font/google'

const anton = Anton({
  weight: '400',
  subsets: ['latin']
})

const Home = () => {
  return (
    <div className={styles['page__wrapper']}>
      <div className={styles['page']}>
        <Image
          src='/background.jpg'
          alt='Background Image'
          quality={80}
          width={1920}
          height={1080}
          priority
          className={styles['bg-image']}
        />
        <div className={styles['content__wrapper']}>
          <div className={styles['content']}>
            <div className={styles['personal-info']}>
              <h4 className={`${styles['hello']} ${anton.className}`}>Hello All. I am</h4>
              <h1 className={`${styles['name']} ${anton.className}`}>Roswaldo Flores</h1>
              <h3 className={styles['work']}>&gt; Web Developer</h3>
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
      </div>
    </div>
  );
};

export default Home;
