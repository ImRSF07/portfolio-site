import React, { ReactNode, useState } from 'react';

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

type ListMappingItem = {
  name: string;
  buttonIcon?: ReactNode | string;
  icon: ReactNode | string;
  link?: string;
  children?: ListMappingItem[];
  displayChildren?: boolean;
};

const defaultListMappings: ListMappingItem[] = [
  {
    name: 'abouts',
    buttonIcon: 'v',
    icon: <FaAddressBook color='#fff' />,
    displayChildren: true,
    children: [
      {
        name: 'about-me.ts',
        icon: <SiTypescript color='#fff' />,
        displayChildren: false,
        link: '/about',
      },
      {
        name: 'work.ts',
        icon: <SiTypescript color='#fff' />,
        displayChildren: false,
        link: '/about/work',
      },
      {
        name: 'skills.ts',
        icon: <SiTypescript color='#fff' />,
        displayChildren: false,
        link: '/about/skills',
      },
    ],
  },
  {
    name: 'projects',
    buttonIcon: 'v',
    icon: <MdStars color='#fff' />,
    displayChildren: true,
    children: [
      {
        name: 'index.ts',
        icon: <SiTypescript color='#fff' />,
        displayChildren: false,
        link: '/projects',
      },
    ],
  },
  {
    name: 'clients',
    buttonIcon: 'v',
    icon: <FaUsers color='#fff' />,
    displayChildren: true,
    children: [
      {
        name: 'index.ts',
        icon: <SiTypescript color='#fff' />,
        displayChildren: false,
        link: '/clients',
      },
    ],
  },
  {
    name: 'contact',
    buttonIcon: 'v',
    icon: <MdContactMail color='#fff' />,
    displayChildren: false,
  },
];

const Sidebar = () => {
  const [listMappings, setListMappings] =
    useState<ListMappingItem[]>(defaultListMappings);

  const onListItemClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const headingText = e.currentTarget.querySelector('h5')?.textContent;

    const allListItems = document.querySelectorAll('li');
    allListItems.forEach((item) => {
      item.classList.remove('active');
    });

    // Add active class to the clicked item
    const clickedItem = e.currentTarget;
    clickedItem.classList.add('active');

    const updatedMappings = listMappings.map((item) => {
      const buttonIcon = item.displayChildren ? '>' : 'v';
      if (item.name === headingText) {
        return {
          ...item,
          displayChildren: !item.displayChildren,
          buttonIcon: buttonIcon,
        };
      }
      return item;
    });
    setListMappings(updatedMappings);
  };

  return (
    <StyledSidebar>
      <RootList>
        {listMappings.map((item, index) => {
          const { name, buttonIcon, icon, children, displayChildren } = item;
          return (
            <>
              <ListItem
                data-content={buttonIcon}
                onClick={onListItemClick}
                key={index}
              >
                <ListContent>
                  {icon}
                  <H5 weight='400'>{name}</H5>
                </ListContent>
              </ListItem>

              {displayChildren &&
                children &&
                children.map((child, index) => {
                  const { name, icon, link } = child;
                  return (
                    <ListItem
                      data-content=''
                      ml='1.5rem'
                      key={index}
                      onClick={onListItemClick}
                    >
                      <ListContent>
                        {icon}
                        <StyledLink weight='400' size='1.125rem' href={link}>
                          {name}
                        </StyledLink>
                      </ListContent>
                    </ListItem>
                  );
                })}
            </>
          );
        })}
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

  &:hover,
  &.active {
    box-shadow: -3.5rem 0 rgba(255, 255, 255, 0.1);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ListContent = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export default Sidebar;
