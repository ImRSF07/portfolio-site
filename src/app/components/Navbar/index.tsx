'use client';

import React from 'react';

import styled from 'styled-components';

import StyledLink from '@/app/components/StyledLink';

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li className='large'>
          <StyledLink href='/' classNames={['no--hover']}>
            &copy; Roswaldo Flores
          </StyledLink>
        </li>
        <li>
          <StyledLink href='/about' color='#a4c0da' classNames={['no--hover']}>
            _about-me
          </StyledLink>
        </li>
        <li>
          <StyledLink
            href='/projects'
            color='#a4c0da'
            classNames={['no--hover']}
          >
            __projects
          </StyledLink>
        </li>
        <li>
          <StyledLink
            href='/clients'
            color='#a4c0da'
            classNames={['no--hover']}
          >
            __clients
          </StyledLink>
        </li>
        <li>
          <StyledLink
            href='/contact'
            color='#a4c0da'
            classNames={['no--hover']}
          >
            __contact
          </StyledLink>
        </li>
      </ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  height: 3rem;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #011627;

  ul {
    display: flex;
    list-style-type: none;
    width: 100%;
    align-items: center;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  li {
    width: 120px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    border-right: 1px solid #011627;
    z-index: 1;

    &.large {
      width: 200px;
    }

    &:not(.large):hover {
      border-bottom: 1px solid #fff;

      .nav-link {
        color: #fff;
      }
    }
  }
`;

export default Navbar;
