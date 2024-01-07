import React from 'react';

import PageLayout from '@/app/layouts/PageLayout';
import H1 from '@/app/components/Typography/H1';
import H4 from '@/app/components/Typography/H4';
import StyledLink from '@/app/components/StyledLink';

const NotFound = () => {
  return (
    <PageLayout>
      <H1 size='3rem' value='Page Not Found :(' classNames={['--shadow']} />
      <H4
        value='Sorry, the page you are looking for does not exist.'
        padding='1rem 0 1.5rem 0'
        size='1rem'
      />
      <StyledLink
        href='/'
        size='1.5rem'
        weight='bold'
        color='#fff'
        padding='0.5rem 1rem'
        margin='0 0 0 1rem'
        decoration='none'
      >
        Go back to Home Page
      </StyledLink>
    </PageLayout>
  );
};

export default NotFound;
