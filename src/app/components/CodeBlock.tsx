import React, { ReactElement } from 'react';

import styled from 'styled-components';

type CodeBlockTypes = {
  gap?: string;
};

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

const CodeBlock = ({ children }: ChildrenType) => {
  return <StyledCodeBlock>{children}</StyledCodeBlock>;
};

const StyledCodeBlock = styled.div<CodeBlockTypes>`
  display: flex;
  gap: ${({ gap }) => gap || '0.5rem'};
  margin-left: 1em;

  &::before {
    counter-increment: line;
    content: counter(line);
    padding: 0 0.5em;
    color: #888;
  }

  span.inline {
    display: flex;
  }
`;

export default CodeBlock;
