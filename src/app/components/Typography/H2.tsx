'use client';

import React from 'react';
import styled from 'styled-components';

type Styles = {
  size?: string;
  weight?: string;
  color?: string;
  padding?: string;
  margin?: string;
};

type Props = Styles & {
  value: string;
  classNames?: string[];
};

const H2 = ({
  value,
  size,
  weight,
  color,
  padding,
  margin,
  classNames = [],
}: Props) => {
  return (
    <StyledH2
      size={size}
      weight={weight}
      color={color}
      padding={padding}
      margin={margin}
      className={classNames?.join(' ')}
    >
      {value}
    </StyledH2>
  );
};

const StyledH2 = styled.h2<Styles>`
  font-size: ${({ size }) => size || '1.875rem'};
  font-weight: ${({ weight }) => weight || 'bold'};
  color: ${({ color }) => color || '#fff'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
`;

export default H2;
