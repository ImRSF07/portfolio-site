'use client';

import React from 'react';

import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { GrStatusGoodSmall } from 'react-icons/gr';

import StyledLink from '@/app/components/StyledLink';

const Footer = () => {
  const visitLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <StyledFooter>
      <ul>
        <li className='no-hover'>find me in: </li>
        <li onClick={() => visitLink('mailto:iamrsf0795@gmail.com')}>
          <FaEnvelope />
        </li>
        <li
          onClick={() =>
            visitLink('https://www.linkedin.com/in/roswaldo-flores-547716161/')
          }
        >
          <FaLinkedin />
        </li>
        <li className='no-hover'>
          <GrStatusGoodSmall className='footer-icon__status' />
          &nbsp; Available for work!
        </li>
      </ul>
      <ul className='reverse'>
        <li onClick={() => visitLink('https://github.com/ImRSF07')}>
          <FaGithub />
          <p>&nbsp;ImRSF07</p>
        </li>
        <li>
          <StyledLink
            href='https://www.behance.net/darelova'
            classNames={['special-thanks__hover']}
            color='#a4c0da'
          >
            Special thanks to: Yanka Darelova
          </StyledLink>
        </li>
      </ul>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  height: 1.5rem;
  border: 1px solid #011627;
  color: #a4c0da;

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    &.reverse {
      display: flex;
      flex-direction: row-reverse;

      .footer-link {
        border-right: none;
        border-left: 1px solid #011627;
      }
    }
  }

  .footer-icon__status {
    color: #01ce01;
    font-size: 0.75rem;
  }

  li {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #011627;
    padding: 0 0.5rem;
  }

  li:not(.no-hover) {
    cursor: pointer;
  }

  li:not(.no-hover):hover {
    color: #fff;

    .url {
      color: #fff;
    }
  }
`;

export default Footer;
