'use client';

import React from 'react';

import ClientsPage from './components';

import ArticleLayout from '../layouts/ArticleLayout';

export default function ClientPage() {
  return (
    <>
      <ArticleLayout>
        <ClientsPage />
      </ArticleLayout>
    </>
  );
}
