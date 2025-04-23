import React, { ReactNode } from 'react';

import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const ProjectCard = ({ children }: Props) => {
  return <StyledProjectCard>{children}</StyledProjectCard>;
};

const StyledProjectCard = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #e63946;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
`;

export default ProjectCard;
