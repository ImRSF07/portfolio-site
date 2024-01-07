'use client';

import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';

type Props = {
  src: string;
  alt: string;
  quality: number;
  width: number;
  height: number;
  priority: boolean;
  classNames?: string[];
};

const CustomImage = ({
  src,
  alt,
  quality,
  width,
  height,
  priority,
  classNames,
}: Props) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      quality={quality}
      width={width}
      height={height}
      priority={priority}
      className={classNames?.join(' ')}
    ></StyledImage>
  );
};

const StyledImage = styled(Image)`
  &.bg-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default CustomImage;
