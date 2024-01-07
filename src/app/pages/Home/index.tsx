'use client';

import React from 'react';

import { Anton } from 'next/font/google';

import styled from 'styled-components';

import PageLayout from '@/app/layouts/PageLayout';
import StyledImage from '@/app/components/StyledImage';
import H1 from '@/app/components/Typography/H1';
import H2 from '@/app/components/Typography/H2';
import P from '@/app/components/Typography/P';
import StyledLink from '@/app/components/StyledLink';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

const Home = () => {
  return (
    <PageLayout>
      <StyledImage
        src='/background.jpg'
        alt='Background Image'
        quality={80}
        width={1920}
        height={1080}
        priority
        classNames={['bg-image']}
      />
      <ContentWrapper>
        <div>
          <H1
            value='Hello All. I am'
            color='#607B96'
            size='2rem'
            classNames={[anton.className]}
          />
          <H1
            value='Roswaldo Flores'
            color='#fff'
            classNames={[anton.className]}
            size='5rem'
          />
          <H2 value='&gt; Web Developer' color='#4D5BCE' weight='bold' />
          <P
            value='// you can also see it on my Github page'
            color='#607B96'
            size='1.25rem'
            margin='1.5rem 0 0 0'
          />
          <P value='const' color='#E99287' size='1.25rem' display='inline' />{' '}
          <P
            value='gitHubLink'
            color='#5565E8'
            size='1.25rem'
            display='inline'
          />
          <P value=' = ' size='1.25rem' display='inline' />
          <StyledLink
            color='#43D9AD'
            decoration='underline'
            href='https://github.com/ImRSF07/portfolio-site'
          >
            https://github.com/ImRSF07/portfolio-site
          </StyledLink>
        </div>
      </ContentWrapper>
    </PageLayout>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Home;
