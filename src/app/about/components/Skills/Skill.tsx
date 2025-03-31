import React from 'react';
import styled from 'styled-components';

import Badges from './components/Badges';

import P from '@/app/components/Typography/P';
import StyledLink from '@/app/components/StyledLink';

type Props = {
  companyName: string;
  companyUrl: string;
  noOfYears: number;
  noOfProjects: number;
};

const Skill = ({ companyName, companyUrl, noOfYears, noOfProjects }: Props) => {
  return (
    <SkillWrapper>
      <StyledLink
        href={companyUrl}
        size='1.125rem'
        textShadow='0 0 5px rgba(0, 255, 255, 0.8)'
      >
        {companyName}
      </StyledLink>
      <InlinedText>
        <P
          textShadow='0 0 5px rgba(0, 255, 255, 0.8)'
          value={`${noOfYears} years,`}
        ></P>
        <StyledLink textShadow='0 0 5px rgba(0, 255, 255, 0.8)' href=''>
          {`${noOfProjects} projects`}
        </StyledLink>
      </InlinedText>
      <Badges noOfYears={noOfYears} noOfProjects={noOfProjects} />
    </SkillWrapper>
  );
};

const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 1rem;
  padding: 0 1rem;
  height: 16vh;
  width: 20vw;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const InlinedText = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default Skill;
