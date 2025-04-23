import React from 'react';

import styled from 'styled-components';

import { SiNextdotjs } from 'react-icons/si';
import { FaReact, FaWordpress, FaHtml5 } from 'react-icons/fa';

import StyledLink from '@/app/components/StyledLink';

const Categories = () => {
  return (
    <CategoriesWrapper>
      <Category>
        <StyledLink href='www.google.com'>All Projects</StyledLink>
      </Category>
      <Category>
        <FaReact color='#fff' />
        <StyledLink href='www.google.com'>React.js</StyledLink>
      </Category>
      <Category>
        <SiNextdotjs color='#fff' />
        <StyledLink href='www.google.com'>Next.js</StyledLink>
      </Category>
      <Category>
        <FaHtml5 color='#fff' />
        <StyledLink href='www.google.com'>HTML5</StyledLink>
      </Category>
      <Category>
        <FaWordpress color='#fff' />
        <StyledLink href='www.google.com'>WordPress</StyledLink>
      </Category>
    </CategoriesWrapper>
  );
};

const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;

  &:hover {
    background-color: green;
  }
`;

const CategoriesWrapper = styled.nav`
  height: 100px;
  height: 1.5rem;
  background-color: blue;
  display: flex;
`;

export default Categories;
