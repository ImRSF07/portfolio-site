'use client';

import React from 'react';

import Link from 'next/link';

import styled from 'styled-components';

type Styles = {
  size?: string;
  weight?: string;
  color?: string;
  padding?: string;
  margin?: string;
  decoration?: string;
  textShadow?: string;
};

type Props = Styles & {
  href: string;
  children: React.ReactNode;
  classNames?: string[];
};

const CustomLink = ({
  href,
  size,
  weight,
  color,
  padding,
  margin,
  decoration,
  textShadow,
  classNames,
  children,
}: Props) => {
  return (
    <StyledLink
      href={href}
      size={size}
      weight={weight}
      color={color}
      padding={padding}
      margin={margin}
      decoration={decoration}
      textShadow={textShadow}
      className={classNames?.join(' ')}
    >
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)<Styles>`
  font-size: ${({ size }) => size || '1rem'};
  font-weight: ${({ weight }) => weight || ''};
  color: ${({ color }) => color || '#fff'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
  text-decoration: ${({ decoration }) => decoration || 'none'};
  text-shadow: ${({ textShadow }) => textShadow || 'none'};

  &:hover {
    text-decoration: underline;
  }

  &.no--hover {
    &:hover {
      text-decoration: none;
    }
  }

  &.special-thanks__hover {
    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }
`;

export default CustomLink;
