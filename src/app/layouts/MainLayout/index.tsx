import React from 'react';

import styles from './styles.module.css';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles['layout']}>{children}</div>;
};

export default MainLayout;
