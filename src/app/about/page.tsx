'use client';

import React from 'react';

import Skills from './components/Skills';

import ArticleLayout from '../layouts/ArticleLayout';

export default function AboutPage() {
  return (
    <>
      <ArticleLayout>
        <Skills />
      </ArticleLayout>
    </>
  );
}
