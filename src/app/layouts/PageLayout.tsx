'use client';

import React from 'react';

import styled from 'styled-components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Styles = {
  overflow?: string;
};

type Props = Styles & {
  children: React.ReactNode;
  classNames?: string[];
};

const PageLayout = ({ children, classNames, overflow }: Props) => {
  return (
    <StyledPageLayout className={classNames?.join(' ')} overflow={overflow}>
      {children}
    </StyledPageLayout>
  );
};

const StyledPageLayout = styled.div<Styles>`
  width: 100%;
  height: calc(94vh - 4.2rem);
  overflow: ${({ overflow }) => overflow || 'hidden'};

  &.flex {
    display: flex;
  }
`;

export default PageLayout;
