"use client";

import React from "react";

import styled from "styled-components";

import H1 from "../components/Typography/H1";

import Skills from "./components/Skills";
import Projects from "./components/Projects";

import ArticleLayout from "../layouts/ArticleLayout";

export default function AboutPage() {
  return (
    <>
      {/* <ArticleLayout color='purple'>
        <StyledAbout>
          <StyledIntro>
            <H5>
              👋 Hello there! I'm Roswaldo, a passionate and highly skilled Full
              Stack Developer with over 5 years of experience in the tech
              industry. As a creative problem solver and technology enthusiast,
              I take immense pride in crafting innovative solutions that make a
              real impact. <br />
              <br />
              🌐 Throughout my journey, I've honed my expertise in both
              front-end and back-end development, mastering technologies such as
              HTML, CSS, JavaScript, React.js, Node.js, and Express. My keen eye
              for design and commitment to creating seamless user experiences
              have allowed me to successfully translate Figma designs into
              polished and fully functional code. <br />
              <br />
              🚀 Passionate about web development, I thrive on taking up new
              challenges and staying at the forefront of technological
              advancements. My dedication to creating comprehensive technical
              documentation ensures clarity and facilitates seamless
              collaboration among stakeholders throughout the development
              process. <br />
              <br />
              🎯 I'm driven by a relentless pursuit of excellence and
              continuously seek opportunities to leverage technology to drive
              tangible benefits for organizations. If you're looking for a
              dynamic Full Stack Developer with a proven track record of
              delivering impactful solutions, I'd be delighted to connect and
              explore how I can contribute to your projects and goals.
            </H5>
          </StyledIntro>
          <StyledImage
            src='/background.jpg'
            alt='Background Image'
            quality={80}
            width={500}
            height={500}
            priority
            classNames={['picture']}
          />
        </StyledAbout>
      </ArticleLayout> */}
      <ArticleLayout color="#000">
        <Skills />
      </ArticleLayout>
      <ArticleLayout color="gray">
        <Projects />
      </ArticleLayout>
      <ArticleLayout color="blue">
        <H1 value="Clients" />
      </ArticleLayout>
      <ArticleLayout color="black">
        <H1 value="Contact" />
      </ArticleLayout>
    </>
  );
}

const StyledIntro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAbout = styled.div`
  /* background: linear-gradient(135deg, #030303 0%, #1a3575 100%); */
  background-color: #011627;
  /* background: linear-gradient(
    236deg,
    rgba(15, 56, 89, 1) 10%,
    rgba(2, 0, 36, 1) 100%
  ); */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
