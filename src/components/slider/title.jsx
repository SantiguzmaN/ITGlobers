import React from 'react';
import styles from './slider.module.scss';
import { Grid } from '@material-ui/core';

const Title = () => {
  return (
    <Grid className={styles.titleContainer} container> 
      <Grid item xs={12}> 
        <span className={styles.text}>ESTÁR CÓMODO, </span>
      </Grid>
      <Grid item xs={12}>
        <span className={styles.text}>NUNCA FUE TAN FÁCIL</span>
      </Grid>
    </ Grid> 
  );
};

export default Title;
