import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import Image from 'next/image';
import Link from 'next/link';

import Header from './Header';
import { Thumb } from './EmblaCarouselThumbsButton';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className='embla'>
      <div className='embla__viewport' ref={emblaMainRef}>
        {/* <Header /> */}
        <div className='embla__container'>
          {slides.map((e, i) => (
            <div className='embla__slide' key={i}>
              <Header title={e.title} />
              {/* <div className='embla__slide__number'>{e.title}</div> */}
              <Link href={e.url} target='_blank'>
                <Image
                  src={e.imagePath}
                  width={1050}
                  height={400}
                />
              </Link>
            </div>
          ))}
        </div>

        <div className='embla-thumbs'>
        <div className='embla-thumbs__viewport' ref={emblaThumbsRef}>
          <div className='embla-thumbs__container'>
            {slides?.map((e, i) => (
              <Thumb
                key={i}
                onClick={() => onThumbClick(i)}
                selected={i === selectedIndex}
                index={i}
                imagePath={e.imagePath}
              />
            ))}
          </div>
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default EmblaCarousel;
