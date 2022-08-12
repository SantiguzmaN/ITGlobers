import React from 'react';
import styles from './body.module.scss';
import InternalBody from './internalBody';
import BodyTile from './bodyTile';
import { Grid } from '@material-ui/core';
import { TilesText } from './tilesText';

const Body = () => {
  return (
    <Grid container> 
      <Grid className={styles.grid} item xs={12} sm={6}> 
        <img src={`${process.env.PUBLIC_URL}/rain1.jpg`} alt="pufi" className={styles.logo} />
      </Grid>
      <Grid className={styles.grid} item xs={12} sm={6}> 
        <BodyTile img={`${process.env.PUBLIC_URL}/rain2.jpg`} r1={TilesText[0].r1} r2={TilesText[0].r2} linkText={TilesText[0].linkText} /> 
      </Grid>
      <Grid className={styles.grid} item xs={12} sm={6}> 
        <BodyTile img={`${process.env.PUBLIC_URL}/puff2.jpg`} r1={TilesText[1].r1} r2={TilesText[1].r2} linkText={TilesText[1].linkText} />
      </Grid>
      <Grid className={styles.grid} item xs={12} sm={6}> 
        <img src={`${process.env.PUBLIC_URL}/puff1.jpg`} alt="pufi" className={styles.logo} /> 
      </Grid>
      <Grid className={styles.grid} item xs={12} sm={6}> 
        <img src={`${process.env.PUBLIC_URL}/cart1.jpg`} alt="pufi" className={styles.logo} />
      </Grid>
      <Grid className={styles.grid} item xs={12} sm={6}> 
        <BodyTile img={`${process.env.PUBLIC_URL}/cart2.jpg`} r1={TilesText[2].r1} r2={TilesText[2].r2} linkText={TilesText[2].linkText} /> 
      </Grid>
      <Grid className={styles.grid} item xs={12} sm={6}> 
        <BodyTile img={`${process.env.PUBLIC_URL}/nap2.jpg`} r1={TilesText[3].r1} r2={TilesText[3].r2} linkText={TilesText[3].linkText} />
      </Grid>
      <Grid className={styles.grid} item xs={12} sm={6}> 
        <img src={`${process.env.PUBLIC_URL}/nap1.jpg`} alt="pufi" className={styles.logo}  /> 
      </Grid>
      <Grid item xs={12}> 
        <InternalBody />∫
      </Grid>
    </Grid>
  );
};

export default Body;
