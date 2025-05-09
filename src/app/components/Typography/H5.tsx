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
  display?: string;
};

type Props = Styles & {
  children?: React.ReactNode;
  classNames?: string[];
};

// Main H5 Component
const H5 = ({
  children,
  size,
  weight,
  color,
  padding,
  margin,
  classNames = [],
  textShadow,
  display,
}: Props) => {
  return (
    <StyledH5
      $size={size}
      $weight={weight}
      $color={color}
      $padding={padding}
      $margin={margin}
      $textShadow={textShadow}
      $display={display}
      className={classNames.join(' ')}
    >
      {children}
    </StyledH5>
  );
};

// Styled Component (note the use of $ prefix to avoid React DOM warnings)
const StyledH5 = styled.h5<{
  $size?: string;
  $weight?: string;
  $color?: string;
  $padding?: string;
  $margin?: string;
  $textShadow?: string;
  $display?: string;
}>`
  font-size: ${({ $size }) => $size || '1.125rem'};
  font-weight: ${({ $weight }) => $weight || 'bold'};
  color: ${({ $color }) => $color || '#fff'};
  padding: ${({ $padding }) => $padding || '0'};
  margin: ${({ $margin }) => $margin || '0'};
  text-shadow: ${({ $textShadow }) => $textShadow || 'none'};
  display: ${({ $display }) => $display || 'block'};
`;

export default H5;
