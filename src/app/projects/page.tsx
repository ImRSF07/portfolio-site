'use client';

import React from 'react';

import Projects from './components';

import ArticleLayout from '../layouts/ArticleLayout';

export default function ProjectsPage() {
  return (
    <>
      <ArticleLayout>
        <Projects />
      </ArticleLayout>
    </>
  );
}
