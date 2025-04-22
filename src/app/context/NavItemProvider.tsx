'use client';

import {
  createContext,
  ReactNode,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

import { defaultListMappings } from '../components/Sidebar';

export type NavItem = {
  id: string;
  name: string;
  url: string;
  selected: boolean;
  icon: ReactNode | string;
};

type NavItemContextType = {
  navItems: NavItem[];
  setNavItems: Dispatch<SetStateAction<NavItem[]>>;
};

const navItemContextState: NavItemContextType = {
  navItems: [],
  setNavItems: () => {},
};

export const NavItemContext =
  createContext<NavItemContextType>(navItemContextState);

export const useNavItemContext = () => {
  const { navItems, setNavItems } = useContext(NavItemContext);

  return { navItems, setNavItems };
};

type NavItemProviderProps = {
  children: ReactNode;
};

export const NavItemProvider = ({ children }: NavItemProviderProps) => {
  const firstChild = defaultListMappings[0]?.children?.[0];
  const [navItems, setNavItems] = useState<NavItem[]>([
    {
      id: firstChild?.id || '',
      name: firstChild?.name || 'about-me.ts',
      selected: true,
      url: firstChild?.link || '/about',
      icon: firstChild?.icon,
    },
  ]);

  return (
    <NavItemContext.Provider value={{ navItems, setNavItems }}>
      {children}
    </NavItemContext.Provider>
  );
};
