import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  text: string;
  percent: number;
};

const dashAnimation = (dashoffset: number) => keyframes`
  to {
    stroke-dashoffset: ${dashoffset};
  }
`;

type StyledSkillProps = {
  $dashoffset: number;
}

const StyledSkill = styled.div<StyledSkillProps>`
  .container__progressbars {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    min-width: 270px;
    width: 100%;
    min-height: 100%;
  }

  .progressbar {
    position: relative;
    width: 170px;
    height: 170px;
    margin: 1rem;
    transform: rotate(-90deg);
  }

  .progressbar__svg {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .progressbar__svg-circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 10;
    stroke-dasharray: 400;
    stroke-dashoffset: 440;
    stroke: white;
    stroke-linecap: round;
    transform: translate(5px, 5px);
    animation: ${({ $dashoffset }) => dashAnimation($dashoffset)} 1s ease-in-out forwards;
  }

  .shadow-skill {
    filter: drop-shadow(0 0 5px #ff6633);
  }

  .progressbar__text {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0.25em 0.5em;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 0.25em;
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

const Skill = ({ text, percent }: Props) => {
  const dashOffset = 440 - (440 * percent) / 100;

  return (
    <StyledSkill className='container__progressbars' $dashoffset={dashOffset}>
      <div className='progressbar'>
        <svg className='progressbar__svg'>
          <circle
            cx='80'
            cy='80'
            r='70'
            className='progressbar__svg-circle shadow-skill'
          />
        </svg>
        <span className='progressbar__text shadow-skill'>{text}</span>
      </div>
    </StyledSkill>
  );
};

export default Skill;
