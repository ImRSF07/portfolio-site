import React from 'react';

import ProjectCard from './components/ProjectCard';
import Categories from './components/Categories';

import styled from 'styled-components';

const Projects = () => {
  return (
    <Container>
      <Categories />
      <CardsWrapper>
        <ProjectCard>HOPLA.Online</ProjectCard>
        <ProjectCard>HOPLA Careers</ProjectCard>
        <ProjectCard>Piece Rate Payroll System</ProjectCard>
        <ProjectCard>Job Order System</ProjectCard>
        <ProjectCard>Personal Portfolio</ProjectCard>
        <ProjectCard>Fictional University</ProjectCard>
        <ProjectCard>Next.js Blog</ProjectCard>
        <ProjectCard>RSFriendster</ProjectCard>
      </CardsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  gap: 1rem;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 1rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  grid-auto-rows: min-content;
  overflow: auto;
`;

export default Projects;
