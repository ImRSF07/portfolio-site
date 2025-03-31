'use client';

import React from 'react';
import styled from 'styled-components';

type Styles = {
  size?: string;
  weight?: string;
  color?: string;
  padding?: string;
  margin?: string;
  textShadow?: string;
};

type Props = Styles & {
  children?: React.ReactNode;
  classNames?: string[];
};

const H5 = ({
  children,
  size,
  weight,
  color,
  padding,
  margin,
  classNames = [],
  textShadow,
}: Props) => {
  return (
    <StyledH5
      size={size}
      weight={weight}
      color={color}
      padding={padding}
      margin={margin}
      textShadow={textShadow}
      className={classNames?.join(' ')}
    >
      {children}
    </StyledH5>
  );
};

const StyledH5 = styled.h5<Styles>`
  font-size: ${({ size }) => size || '1.125rem'};
  font-weight: ${({ weight }) => weight || 'bold'};
  color: ${({ color }) => color || '#fff'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
  text-shadow: ${({ textShadow }) => textShadow || 'none'};
`;

export default H5;
