import React from 'react';
import PropTypes from 'prop-types';
import styles from './slider.module.scss';
import styled from 'styled-components';

const Dot = styled.img`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${'props => props.active' ? 'white' : 'white'};
`;

const Dots = ({ images , activeIndex }) => (
  <div className={styles.dotsPanel}>
    {images.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i}/>
    ))}
  </div>
);

Dots.propTypes = {
  images: PropTypes.array,
  activeIndex: PropTypes.number
};

export default Dots;
