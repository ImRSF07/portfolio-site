import React from 'react';

import styled from 'styled-components';

import { FaAddressBook } from 'react-icons/fa6';
import { MdStars } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa6';
import { MdContactMail } from 'react-icons/md';

import { SiTypescript } from 'react-icons/si';

import StyledLink from './StyledLink';

import H5 from './Typography/H5';

type ListItemProps = {
  ml?: string;
};

const Sidebar = () => {
  return (
    <StyledSidebar>
      <RootList>
        <ListItem data-content='v'>
          <ListContent>
            <FaAddressBook color='#fff' />
            <H5 weight='400'>abouts</H5>
          </ListContent>
        </ListItem>

        <ListItem data-content='' ml='17px'>
          <ListContent>
            <SiTypescript color='#fff' />
            <StyledLink
              weight='400'
              size='1.125rem'
              href='http://localhost:3000/about'
            >
              about-me.ts
            </StyledLink>
          </ListContent>
        </ListItem>

        <ListItem data-content='' ml='17px'>
          <ListContent>
            <SiTypescript color='#fff' />
            <StyledLink
              weight='400'
              size='1.125rem'
              href='http://localhost:3000/work'
            >
              work.ts
            </StyledLink>
          </ListContent>
        </ListItem>

        <ListItem data-content='' ml='17px'>
          <ListContent>
            <SiTypescript color='#fff' />
            <StyledLink
              weight='400'
              size='1.125rem'
              href='http://localhost:3000/work'
            >
              skills.ts
            </StyledLink>
          </ListContent>
        </ListItem>

        <ListItem data-content='>'>
          <ListContent>
            <MdStars color='#fff' />
            <H5 weight='400'>projects</H5>
          </ListContent>
        </ListItem>
        <ListItem data-content='>'>
          <ListContent>
            <FaUsers color='#fff' />
            <H5 weight='400'>clients</H5>
          </ListContent>
        </ListItem>
        <ListItem data-content='>'>
          <ListContent>
            <MdContactMail color='#fff' />
            <H5 weight='400'>contact</H5>
          </ListContent>
        </ListItem>
      </RootList>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  display: flex;
  width: 20vh;
  height: 100%;
  border-right: 1px solid #011627;
  padding: 0.5rem 1rem;
`;

const RootList = styled.ul`
  list-style: none;
  padding-left: 1rem;
  margin: 0;
`;

const ListItem = styled.li<ListItemProps>`
  display: inline-flex;
  margin-left: ${({ ml }) => ml || '8px'};
  margin-top: 4px;
  margin-bottom: 4px;
  cursor: pointer;
  width: 100%;

  &::before {
    content: attr(data-content);
    color: #fff;
    margin-right: 8px;
    font-weight: bold;
  }
`;

const ListContent = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export default Sidebar;
