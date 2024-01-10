'use client';

import React from 'react';

import styled from 'styled-components';

const SectionLayout = ({ children }: { children: React.ReactNode }) => {
  return <StyledSectionLayout>{children}</StyledSectionLayout>;
};

export default SectionLayout;

const StyledSectionLayout = styled.section`
  background-color: blue;
  flex: 1;
  height: inherit;
  overflow: auto;
`;
