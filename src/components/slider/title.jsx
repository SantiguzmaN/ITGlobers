import React from 'react';
import styles from './slider.module.scss';

const Title = () => {
  return (
    <div className={styles.titleContainer}>
      <span className={styles.text}>ESTÁR CÓMODO, </span>
      <br />
      <span className={styles.text}>NUNCA FUE TAN FÁCIL</span>
    </div>
  );
};

export default Title;
