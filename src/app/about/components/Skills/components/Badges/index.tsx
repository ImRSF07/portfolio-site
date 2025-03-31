import React from 'react';
import styled from 'styled-components';

type Props = {
  noOfYears: number;
  noOfProjects: number;
};

const Badges = ({ noOfYears, noOfProjects }: Props) => {
  const yearBadges = Array.from({ length: noOfYears }, () => (
    <Badge className='year' />
  ));

  const projectBadges = Array.from({ length: noOfProjects }, () => (
    <Badge className='project' />
  ));

  return <BadgeGroup>{[...yearBadges, ...projectBadges]}</BadgeGroup>;
};

const Badge = styled.div`
  border-radius: 4px;
  display: inline-block;
  width: 12px;
  height: 24px;
  margin: 0 2px 0 0;

  &.project {
    background: linear-gradient(#238b8b 49%, #1d7373 51%);
  }

  &.year {
    background: linear-gradient(#d55757 49%, #bf3030 51%);
  }
`;

const BadgeGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 0rem 0.25rem;
  padding: 8px 0;
`;

export default Badges;
