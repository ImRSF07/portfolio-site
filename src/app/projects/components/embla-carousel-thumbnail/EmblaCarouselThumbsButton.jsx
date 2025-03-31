import React from 'react';

import Image from 'next/image';

export const Thumb = (props) => {
  const { selected, index, onClick } = props;

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      {/* <button
        onClick={onClick}
        type='button'
        className='embla-thumbs__slide__number'
      >
        {index}
      </button> */}
      <Image
        className='embla-thumbs__slide__number'
        src={props.imagePath}
        width={300}
        height={200}
        onClick={onClick}
      />
    </div>
  );
};
