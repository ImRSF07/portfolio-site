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

const H1 = ({
  value,
  size,
  weight,
  color,
  padding,
  margin,
  classNames = [],
}: Props) => {
  return (
    <StyledH1
      size={size}
      weight={weight}
      color={color}
      padding={padding}
      margin={margin}
      className={classNames?.join(' ')}
    >
      {value}
    </StyledH1>
  );
};

const StyledH1 = styled.h1<Styles>`
  font-size: ${({ size }) => size || '2.125rem'};
  font-weight: ${({ weight }) => weight || 'bold'};
  color: ${({ color }) => color || '#fff'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};

  &.--shadow {
    text-shadow: 8px 8px 40px #fff;
  }
`;

export default H1;
