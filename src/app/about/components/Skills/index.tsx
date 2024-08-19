import React from "react";
import styled from "styled-components";

import Skill from "./Skill";

const Skills = () => {
  return (
    <SkillsWrapper>
      <SkillsSection>
        <Skill text="HTML" percent={10} />
        <Skill text="CSS" percent={20} />
        <Skill text="JavaScript" percent={30} />
        <Skill text="React" percent={40} />
      </SkillsSection>
      <SkillsSection>
        <Skill text="Node" percent={50} />
        <Skill text="PHP" percent={60} />
        <Skill text="Wordpress" percent={70} />
        <Skill text="SQL" percent={80} />
      </SkillsSection>
    </SkillsWrapper>
  );
};

const SkillsSection = styled.div`
  display: flex;
  gap: 1rem;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Skills;
