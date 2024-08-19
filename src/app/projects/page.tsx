'use client';

import React from 'react';

import styled from 'styled-components';


import Projects from './components';

import ArticleLayout from '../layouts/ArticleLayout';

export default function AboutPage() {
  return (
    <>
      <ArticleLayout>
        <Projects />
      </ArticleLayout>
    </>
  );
}

const StyledIntro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAbout = styled.div`
  /* background: linear-gradient(135deg, #030303 0%, #1a3575 100%); */
  background-color: #011627;
  /* background: linear-gradient(
    236deg,
    rgba(15, 56, 89, 1) 10%,
    rgba(2, 0, 36, 1) 100%
  ); */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
