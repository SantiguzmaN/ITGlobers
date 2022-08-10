import React, { useState, useEffect } from 'react';
import styles from './slider.module.scss';
import Header from '../header/header';
import styled from 'styled-components';
import Dots from './dots';
import Title from './title';
import SliderButton from './sliderButton';
import leftArrow from './img/left-arrow.svg';
import rightArrow from './img/right-arrow.svg';

const SliderImg = styled.img`
  max-width: 100vw;
  width: 100vw;
  height: auto;
  opacity: 0;
  transition: 1s;
  &.loaded {
    opacity: 1;
  }
`;

const Slider = () => {
  const images = ['im1.jpg','im2.jpg','im3.jpg'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length -1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length -1;    
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 250);
 
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };
  console.log(selectedIndex);

  return (
    <div className={styles.sliderContainer}>
      <Header />
      <SliderImg 
        src={`${process.env.PUBLIC_URL}/${selectedImage}`} 
        alt ="slider" 
        className={loaded ? 'loaded': ''} 
        onLoad={() => setLoaded(true)}
      />
      <button className={styles.arrowLeft} onClick={previous}>
        <img src={leftArrow} alt="previos" />
      </button>
      <button className={styles.arrowRigth} onClick={next}>
        <img src={rightArrow} alt="next" />
      </button>
      <Dots images={images} activeIndex={selectedIndex} />
      <button className={styles.arrowRigth} onClick={next}>
        <img src={rightArrow} alt="next" />
      </button>

      <Title/>
      <SliderButton />

    </div>
  );
};

export default Slider;
