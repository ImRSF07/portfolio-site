'use client';

import React from 'react';
import styled from 'styled-components';

type Styles = {
  size?: string;
  weight?: string;
  color?: string;
  padding?: string;
  margin?: string;
  display?: string;
};

type Props = Styles & {
  value: string;
  classNames?: string[];
};

const P = ({
  value,
  size,
  weight,
  color,
  padding,
  margin,
  display,
  classNames = [],
}: Props) => {
  return (
    <StyledP
      size={size}
      weight={weight}
      color={color}
      padding={padding}
      margin={margin}
      display={display}
      className={classNames?.join(' ')}
    >
      {value}
    </StyledP>
  );
};

const StyledP = styled.p<Styles>`
  font-size: ${({ size }) => size || '1rem'};
  font-weight: ${({ weight }) => weight || ''};
  color: ${({ color }) => color || '#fff'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
  display: ${({ display }) => display || 'block'};
`;

export default P;
