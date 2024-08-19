'use client';

import React from 'react';

import { EmblaOptionsType } from 'embla-carousel';

import Header from './embla-carousel-thumbnail/Header';
import Footer from './embla-carousel-thumbnail/Footer';
import EmblaCarousel from './embla-carousel-thumbnail/EmblaCarousel';

import './embla-carousel-thumbnail/styles/base.css';
import './embla-carousel-thumbnail/styles/sandbox.css';
import './embla-carousel-thumbnail/styles/embla.css';

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const newSlides = [
  { title: 'Job Order System', imagePath: '/hopla-online.png', url: '' },
  {
    title: 'Piece Rate Payroll System',
    imagePath: '/hopla-online.png',
    url: '',
  },
  {
    title: 'HOPLA.Online',
    imagePath: '/hopla-online.png',
    url: 'https://hopla.online/',
  },
  {
    title: 'HOPLA Careers',
    imagePath: '/hopla-careers.png',
    url: 'https://www.hoplacareers.online/',
  },
  {
    title: 'HOPLA Recruiter Dashboard',
    imagePath: '/hopla-recruiters.png',
    url: '',
  },
  {
    title: 'HOPLA Recruitment Challenger Program',
    imagePath: '/hopla-challenger.png',
    url: 'http://campaign-xi.vercel.app/',
  },
];

const Projects = () => {
  return (
    <>
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      {/* <Header /> */}
      <EmblaCarousel slides={newSlides} options={OPTIONS} />
      {/* <Footer /> */}
    </>
  );
};

export default Projects;
