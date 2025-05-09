import React from 'react';

import styled from 'styled-components';

import P from '@/app/components/Typography/P';
import CodeBlock from '@/app/components/CodeBlock';

const About = () => {
  return (
    <ContentWrapper>
      <CodeBlock>
        <P margin='0 0 0 1em' value='const' color='orange'></P>
        <P value='NAME' color='white'></P>
        <P value='=' color='rgb(145, 180, 213)'></P>
        <span className='inline'>
          <P value="'" color='grey'></P>
          <P value='Roswaldo Flores' color='rgb(93, 228, 199)'></P>
          <P value="'" color='grey'></P>
          <P value=';' color='white'></P>
        </span>
      </CodeBlock>
      <CodeBlock />
      <CodeBlock>
        <P margin='0 0 0 1em' value='const' color='orange'></P>
        <P value='location' color='white'></P>
        <P value='=' color='rgb(145, 180, 213)'></P>
        <span className='inline'>
          <P value="'" color='grey'></P>
          <P
            value='General Santos City, Philippines'
            color='rgb(93, 228, 199)'
          ></P>
          <P value="'" color='grey'></P>
          <P value=';' color='white'></P>
        </span>
      </CodeBlock>
      <CodeBlock />
      <CodeBlock>
        <P margin='0 0 0 1em' value='let' color='orange'></P>
        <P value='hobbies' color='white'></P>
        <P value='=' color='rgb(145, 180, 213)'></P>
        <span className='inline'>
          <P value='[' color='orange'></P>
        </span>
      </CodeBlock>
      <CodeBlock>
        <P
          margin='0 0 0 2em'
          value="'Programming'"
          color='rgb(93, 228, 199)'
        ></P>
        <P value=',' color='grey'></P>
      </CodeBlock>
      <CodeBlock>
        <P margin='0 0 0 2em' value="'Leetcode'" color='rgb(93, 228, 199)'></P>
        <P value=',' color='grey'></P>
      </CodeBlock>
      <CodeBlock>
        <P margin='0 0 0 2em' value="'Reading'" color='rgb(93, 228, 199)'></P>
        <P value=',' color='grey'></P>
      </CodeBlock>
      <CodeBlock>
        <P
          margin='0 0 0 2em'
          value="'Watching Movies'"
          color='rgb(93, 228, 199)'
        ></P>
        <P value=',' color='grey'></P>
      </CodeBlock>
      <CodeBlock>
        <P
          margin='0 0 0 1.25em'
          value="'Playing Games'"
          color='rgb(93, 228, 199)'
        ></P>
        <P value=',' color='grey'></P>
      </CodeBlock>
      <CodeBlock>
        <span className='inline'>
          <P margin='0 0 0 0' value=']' color='orange'></P>
          <P value=';' color='white'></P>
        </span>
      </CodeBlock>
      <CodeBlock />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  height: 100%;
  counter-reset: line;
`;

export default About;
