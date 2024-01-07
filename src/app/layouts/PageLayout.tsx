'use client';

import React from 'react';

import styled from 'styled-components';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <StyledPageLayout>{children}</StyledPageLayout>;
};

const StyledPageLayout = styled.div`
  width: 100%;
  height: calc(94vh - 4.2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default PageLayout;
