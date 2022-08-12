import React, { PropTypes } from 'react';
import { Grid } from '@material-ui/core';
import styles from './body.module.scss';
import { BsChevronRight } from 'react-icons/bs';

const BodyTile = ({ img , r1, r2, linkText }) => {
  return (
    <div >
      <Grid className={styles.bodyTile} container> 
        <Grid className={styles.centered} item xs={12}> 
          <img src={img} alt="pufi" />
        </Grid>
        <Grid item xs={12}>
          <span>{r1}</span>
          <span>{r2} </span>
        </Grid>
        <Grid item xs={12}>
          <span className={styles.mtop}><BsChevronRight />{linkText}</span> 
        </Grid>
      </ Grid>      
    </div>
  );
};

export default BodyTile;
