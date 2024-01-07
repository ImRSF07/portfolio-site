'use client';

import React from 'react';
import styled from 'styled-components';

type Styles = {
  size?: string;
  weight?: string;
  color?: string;
  padding?: string;
};

type Props = Styles & {
  value: string;
  classNames?: string[];
};

const H5 = ({
  value,
  size,
  weight,
  color,
  padding,
  classNames = [],
}: Props) => {
  return (
    <StyledH5
      size={size}
      weight={weight}
      color={color}
      padding={padding}
      className={classNames?.join(' ')}
    >
      {value}
    </StyledH5>
  );
};

const StyledH5 = styled.h5<Styles>`
  font-size: ${({ size }) => size || '1.125rem'};
  font-weight: ${({ weight }) => weight || 'bold'};
  color: ${({ color }) => color || '#fff'};
  padding: ${({ padding }) => padding || '0'};
`;

export default H5;
