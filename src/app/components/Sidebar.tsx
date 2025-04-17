import React, { ReactNode, useState, Fragment } from 'react';

import styled from 'styled-components';

import { FaAddressBook } from 'react-icons/fa6';
import { MdStars } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa6';
import { MdContactMail } from 'react-icons/md';
import { SiTypescript } from 'react-icons/si';

import StyledLink from './StyledLink';
import H5 from './Typography/H5';

import { useNavItemContext } from '../context/NavItemProvider';

import { generateRandomId } from '../utils/util';

type ListItemProps = {
  ml?: string;
};

type ListMappingItem = {
  id: string;
  name: string;
  buttonIcon?: ReactNode | string;
  icon: ReactNode | string;
  link?: string;
  children?: ListMappingItem[];
  displayChildren?: boolean;
};

export const defaultListMappings: ListMappingItem[] = [
  {
    id: generateRandomId(),
    name: 'abouts',
    buttonIcon: 'v',
    icon: <FaAddressBook color='#fff' />,
    displayChildren: true,
    children: [
      {
        id: generateRandomId(),
        name: 'about-me.ts',
        icon: <SiTypescript color='#fff' />,
        displayChildren: false,
        link: '/about',
      },
      {
        id: generateRandomId(),
        name: 'work.ts',
        icon: <SiTypescript color='#fff' />,
        displayChildren: false,
        link: '/about/work',
      },
      {
        id: generateRandomId(),
        name: 'skills.ts',
        icon: <SiTypescript color='#fff' />,
        displayChildren: false,
        link: '/about/skills',
      },
    ],
  },
  {
    id: generateRandomId(),
    name: 'projects',
    buttonIcon: 'v',
    icon: <MdStars color='#fff' />,
    displayChildren: true,
    children: [
      {
        id: generateRandomId(),
        name: 'index.ts',
        icon: <SiTypescript color='#fff' />,
        displayChildren: false,
        link: '/projects',
      },
    ],
  },
  {
    id: generateRandomId(),
    name: 'clients',
    buttonIcon: 'v',
    icon: <FaUsers color='#fff' />,
    displayChildren: true,
    children: [
      {
        id: generateRandomId(),
        name: 'index.ts',
        icon: <SiTypescript color='#fff' />,
        displayChildren: false,
        link: '/clients',
      },
    ],
  },
  {
    id: generateRandomId(),
    name: 'contact',
    buttonIcon: 'v',
    icon: <MdContactMail color='#fff' />,
    displayChildren: false,
  },
];

const Sidebar = () => {
  const [listMappings, setListMappings] =
    useState<ListMappingItem[]>(defaultListMappings);

  const { setNavItems, navItems } = useNavItemContext();

  const handleListItemClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    item?: ListMappingItem | undefined
  ) => {
    const headingText = e.currentTarget.querySelector('h5')?.textContent;
    const linkText: string =
      e.currentTarget.querySelector('a')?.textContent || '';

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

    const navItemIds = navItems.map((item) => item.id);

    if (item && typeof item === 'object') {
      if (!navItemIds.includes(item.id)) {
        const updatedNavItems = navItems.map((navItem) => ({
          ...navItem,
          selected: false,
        }));

        setNavItems([
          ...updatedNavItems,
          {
            id: item.id,
            selected: true,
            name: linkText,
            url: item.link || '/',
            icon: item.icon,
          },
        ]);
      } else {
        const updatedNavItems = navItems.map((navItem) => {
          if (navItem.id === item.id) {
            return { ...navItem, selected: true };
          }
          return { ...navItem, selected: false };
        });
        setNavItems(updatedNavItems);
      }
    }
  };

  return (
    <StyledSidebar>
      <RootList>
        {listMappings.map((item, index) => {
          const { name, buttonIcon, icon, children, displayChildren } = item;
          return (
            <Fragment key={index}>
              <ListItem
                data-content={buttonIcon}
                onClick={(e) => handleListItemClick(e)}
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
                      onClick={(e) => handleListItemClick(e, child)}
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
            </Fragment>
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
