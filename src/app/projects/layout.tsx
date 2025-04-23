'use client';

import React from 'react';

import styled from 'styled-components';

import PageLayout from '../layouts/PageLayout';

import Sidebar from '../components/Sidebar';

export default function ProjectPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout classNames={['flex']}>
      <Sidebar />
      <StyledContainer>{children}</StyledContainer>
    </PageLayout>
  );
}

const StyledContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
