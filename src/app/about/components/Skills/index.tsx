import React from 'react';

import Skill from './Skill';

const Skills = () => {
  return (
    <>
      <Skill
        companyName='Alsons Aquaculture Corporation'
        companyUrl='https://www.linkedin.com/company/alsons-aquaculture-corporation/'
        noOfYears={4}
        noOfProjects={3}
      ></Skill>
      <Skill
        companyName='HOPLA.Online'
        companyUrl='https://www.linkedin.com/company/hoplaonline/posts/?feedView=all'
        noOfYears={2}
        noOfProjects={3}
      ></Skill>
    </>
  );
};

export default Skills;
