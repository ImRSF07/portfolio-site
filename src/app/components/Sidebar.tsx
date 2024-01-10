'use client';

import React from 'react';

import styled from 'styled-components';

import H1 from './Typography/H1';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <H1 value='Sidebar' />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  background-color: red;
  width: 200px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #011627;
`;

export default Sidebar;
