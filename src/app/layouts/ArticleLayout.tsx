'use client';

import React from 'react';

import styled from 'styled-components';

const ArticleLayout = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  return <StyledArticleLayout color={color}>{children}</StyledArticleLayout>;
};

export default ArticleLayout;

const StyledArticleLayout = styled.article`
  background-color: ${({ color }) => color || '#fff'};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
