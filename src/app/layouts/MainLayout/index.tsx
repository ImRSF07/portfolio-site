import React from 'react';

import styles from './styles.module.css';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles['layout']}>{children}</main>;
};

export default MainLayout;
