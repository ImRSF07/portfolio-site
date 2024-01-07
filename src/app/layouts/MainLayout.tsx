'use client';

import React from 'react';

import styled from 'styled-components';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <StyledMainLayout>{children}</StyledMainLayout>;
};

const StyledMainLayout = styled.main`
  width: calc(95vw - 20px);
  height: calc(94vh - 20px);
  border: 1px solid #011627;
`;

export default MainLayout;
