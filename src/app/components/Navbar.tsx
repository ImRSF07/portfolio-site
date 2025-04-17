'use client';

import React from 'react';

import styled from 'styled-components';

import { RxCross2 } from 'react-icons/rx';

import StyledLink from '@/app/components/StyledLink';

import { useNavItemContext, NavItem } from '@/app/context/NavItemProvider';

const Navbar = () => {
  const { navItems, setNavItems } = useNavItemContext();

  const handleClose = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    item: NavItem
  ) => {
    e.stopPropagation();
    if (navItems.length <= 1) return;
    const updatedNavItems = navItems.filter(
      (navItem) => navItem.id !== item.id
    );
    updatedNavItems[updatedNavItems.length - 1].selected = true;
    setNavItems(updatedNavItems);
  };

  const handleNavItemClick = (item: NavItem) => {
    const updatedNavItems = navItems.map((navItem) => {
      if (navItem.id === item.id) {
        return { ...navItem, selected: true };
      }
      return { ...navItem, selected: false };
    });
    setNavItems(updatedNavItems);
  };

  return (
    <StyledNavbar>
      <Ul>
        <Li className='large'>
          <StyledLink href='/' classNames={['no--hover']}>
            &copy; Roswaldo Flores
          </StyledLink>
        </Li>
        {navItems.map((item, index) => {
          return (
            <Li
              key={index}
              className={item.selected ? 'selected' : ''}
              onClick={() => handleNavItemClick(item)}
            >
              {item.icon}
              <StyledLink
                href={item.url}
                color='#a4c0da'
                classNames={['no--hover']}
              >
                {item.name}
              </StyledLink>
              <RxCross2 color='#fff' onClick={(e) => handleClose(e, item)} />
            </Li>
          );
        })}
      </Ul>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  height: 3rem;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #011627;
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  align-items: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const Li = styled.li`
  width: 10rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  border-right: 1px solid #011627;
  z-index: 1;
  gap: 8px;

  &.large {
    width: 20vh;
  }

  &.selected {
    border-bottom: 1px solid #fff;
  }

  &:not(.large):hover {
    border-bottom: 1px solid #fff;

    .nav-link {
      color: #fff;
    }
  }
`;

export default Navbar;
