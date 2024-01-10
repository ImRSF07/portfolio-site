import React from 'react';

import H1 from '../components/Typography/H1';
import ArticleLayout from '../layouts/ArticleLayout';

export default function Home() {
  return (
    <>
      <ArticleLayout color='purple'>
        <H1 value='About Me' />
      </ArticleLayout>
      <ArticleLayout color='green'>
        <H1 value='Skills' />
      </ArticleLayout>
      <ArticleLayout color='blue'>
        <H1 value='Clients' />
      </ArticleLayout>
      <ArticleLayout color='black'>
        <H1 value='Contact' />
      </ArticleLayout>
    </>
  );
}
