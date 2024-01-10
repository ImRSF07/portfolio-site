'use client';

import React from 'react';

import styled from 'styled-components';

import PageLayout from '../layouts/PageLayout';
import SectionLayout from '../layouts/SectionLayout';

import Sidebar from '../components/Sidebar';

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout overflow='auto'>
      <StyledContainer>
        <Sidebar />
        <SectionLayout>{children}</SectionLayout>
      </StyledContainer>
    </PageLayout>
  );
}

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
