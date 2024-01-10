'use client';

import React from 'react';

import styled from 'styled-components';

import PageLayout from '../layouts/PageLayout';

import H1 from '../components/Typography/H1';

export default function Home() {
  return (
    <PageLayout overflow='auto'>
      <StyledContainer>
        <H1 value='About Me' />
      </StyledContainer>
      <StyledContainer2>
        <H1 value='Skills' />
      </StyledContainer2>
    </PageLayout>
  );
}

const StyledContainer = styled.div`
  background-color: red;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledContainer2 = styled.div`
  background-color: blue;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
