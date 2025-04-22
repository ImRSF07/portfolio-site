import React from 'react';

import styled from 'styled-components';

import P from '@/app/components/Typography/P';
import CodeBlock from '@/app/components/CodeBlock';

const Skills = () => {
  const SKILLS = {
    languages: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'PHP',
      'Python', // still learning this...
    ],
    frameworks: ['React.js', 'Node.js', 'Next.js'],
    databases: ['Microsoft SQL Server', 'MySQL'],
    tools: ['Git/GitHub', 'Wordpress', 'Styled Components', 'REST API'],
    collaboration: ['Figma', 'Jira', 'Slack'],
    methodologies: ['Waterfall', 'Agile'],
    infrastructure: ['Heroku', 'Vercel', 'Docker', 'DigitalOcean'],
  };

  return (
    <ContentWrapper>
      <CodeBlock>
        <P margin='0 0 0 1em' value='const' color='orange'></P>
        <P value='SKILLS'></P>
        <P value='=' color='rgb(145, 180, 213)'></P>
        <P value='{' color='orange'></P>
      </CodeBlock>

      {/* Languages */}
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 2em' value='languages'></P>
          <P value=':'></P>
          <P margin='0 0 0 0.5em' value='[' color='yellow'></P>
        </span>
      </CodeBlock>
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 3em' value="'HTML'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
        </span>
      </CodeBlock>
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 3em' value="'CSS'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
        </span>
      </CodeBlock>
      <CodeBlock>
        <span className='inline'>
          <P
            margin='0 0 0 3em'
            value="'JavaScript'"
            color='rgb(93, 228, 199)'
          ></P>
          <P value=','></P>
        </span>
      </CodeBlock>
      <CodeBlock>
        <span className='inline'>
          <P
            margin='0 0 0 3em'
            value="'TypeScript'"
            color='rgb(93, 228, 199)'
          ></P>
          <P value=','></P>
        </span>
      </CodeBlock>
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 3em' value="'PHP'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
        </span>
      </CodeBlock>
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 3em' value="'Python'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P
            margin='0 0 0 1em'
            value='// still learning this...'
            color='#c4c6d3af'
          ></P>
        </span>
      </CodeBlock>
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 2em' value=']' color='yellow'></P>
          <P value=','></P>
        </span>
      </CodeBlock>

      {/* Frameworks */}
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 1.5em' value='frameworks'></P>
          <P value=':'></P>
          <P margin='0 0 0 0.5em' value='[' color='yellow'></P>
          <P value="'React.js'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P
            margin='0 0 0 0.5em'
            value="'Node.js'"
            color='rgb(93, 228, 199)'
          ></P>
          <P value=','></P>
          <P
            margin='0 0 0 0.5em'
            value="'Next.js'"
            color='rgb(93, 228, 199)'
          ></P>
          <P value=']' color='yellow'></P>
          <P value=','></P>
        </span>
      </CodeBlock>

      {/* Databases */}
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 1.5em' value='databases'></P>
          <P value=':'></P>
          <P margin='0 0 0 0.5em' value='[' color='yellow'></P>
          <P value="'Microsoft SQL Server'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P margin='0 0 0 0.5em' value="'MySQL'" color='rgb(93, 228, 199)'></P>
          <P value=']' color='yellow'></P>
          <P value=','></P>
        </span>
      </CodeBlock>

      {/* Tools */}
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 1.5em' value='tools'></P>
          <P value=':'></P>
          <P margin='0 0 0 0.5em' value='[' color='yellow'></P>
          <P value="'Git/GitHub'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P value="'Styled Components'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P value="'REST API'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P
            margin='0 0 0 0.5em'
            value="'WordPress'"
            color='rgb(93, 228, 199)'
          ></P>
          <P value=']' color='yellow'></P>
          <P value=','></P>
        </span>
      </CodeBlock>

      {/* Collaboration */}
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 1.5em' value='collaboration'></P>
          <P value=':'></P>
          <P margin='0 0 0 0.5em' value='[' color='yellow'></P>
          <P value="'Figma'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P value="'Jira'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P margin='0 0 0 0.5em' value="'Slack'" color='rgb(93, 228, 199)'></P>
          <P value=']' color='yellow'></P>
          <P value=','></P>
        </span>
      </CodeBlock>

      {/* Methodologies */}
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 1.5em' value='methodologies'></P>
          <P value=':'></P>
          <P margin='0 0 0 0.5em' value='[' color='yellow'></P>
          <P value="'Agile'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P
            margin='0 0 0 0.5em'
            value="'Waterfall'"
            color='rgb(93, 228, 199)'
          ></P>
          <P value=']' color='yellow'></P>
          <P value=','></P>
        </span>
      </CodeBlock>

      {/* Infrastructure */}
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 1.5em' value='infrastructure'></P>
          <P value=':'></P>
          <P margin='0 0 0 0.5em' value='[' color='yellow'></P>
          <P value="'Vercel'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P value="'Heroku'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P value="'Docker'" color='rgb(93, 228, 199)'></P>
          <P value=','></P>
          <P
            margin='0 0 0 0.5em'
            value="'DigitalOcean'"
            color='rgb(93, 228, 199)'
          ></P>
          <P value=']' color='yellow'></P>
          <P value=','></P>
        </span>
      </CodeBlock>

      <CodeBlock>
        <P value='}' color='orange'></P>
      </CodeBlock>

      <CodeBlock />
      <CodeBlock />
      <CodeBlock />
      <CodeBlock>
        <span className='inline'>
          <P value='export default' color='orange'></P>
          <P margin='0 0 0 0.5em' value='SKILLS'></P>
          <P value=';'></P>
        </span>
      </CodeBlock>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  counter-reset: line;
`;

const EmptySpace = styled.div`
  height: 100px;
`;

export default Skills;
