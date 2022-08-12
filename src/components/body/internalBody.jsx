import React, { useState } from 'react';
import styles from './body.module.scss';
import { Grid } from '@material-ui/core';
import { BsArrowRight } from 'react-icons/bs';
// import { ADD_EMAIL } from '../../actions';
// import { useDispatch } from 'react-redux';

const InternalBody = () => {
  const [email, setEmail] = useState();
  // const dispatch = useDispatch();

  // const addEmail = () => {
  //   dispatch({
  //     type: ADD_EMAIL,
  //     // payload: ,
  //   });
  // };

  // const validateEmail = () => {
  //   console.log('validando email');
  // };

  return (
    <Grid className={styles.bodyContainer} container xs={12}> 
      <Grid xs={8}> 
        <Grid item xs={12}>
          <span className={styles.subTitle}>INSTAGRAM</span>
        </Grid>
        <Grid item xs={12}>
          <span className={styles.title}>#ESPUFI</span>
        </Grid>
      </Grid>
      <Grid container item xs={8}> 
        
        <Grid className={styles.secondGrid} item border={2} xs={6} sm={4}> 
          <img src={`${process.env.PUBLIC_URL}/mg1.jpg`} alt="pufi" />
        </Grid>
        <Grid className={styles.secondGrid} item xs={6} sm={4}> 
          <img src={`${process.env.PUBLIC_URL}/mg2.jpg`} alt="pufi" />
        </Grid>
        <Grid className={styles.secondGrid} item xs={6} sm={4}> 
          <img src={`${process.env.PUBLIC_URL}/mg3.jpg`} alt="pufi" />
        </Grid>
        <Grid className={styles.secondGrid} item xs={6} sm={4}> 
          <img src={`${process.env.PUBLIC_URL}/mg4.jpg`} alt="pufi" />
        </Grid>
        <Grid className={styles.secondGrid} item xs={6} sm={4}> 
          <img src={`${process.env.PUBLIC_URL}/mg5.jpg`} alt="pufi" />
        </Grid>
        <Grid className={styles.secondGrid} item xs={6} sm={4}> 
          <img src={`${process.env.PUBLIC_URL}/mg6.jpg`} alt="pufi" />
        </Grid>
      </Grid>
      <Grid item xs={8}> 
        <Grid item xs={12}> 
          <Grid item xs={12}>
            <span className={styles.subTitle}>NEWSLETTER</span>
          </Grid>
          <Grid item xs={12}>
            <span className={styles.title}>SUSCRIBETE</span>
          </Grid>
          <Grid item xs={12}>
            <span className={styles.description}>Y enterate de las novedades</span>
          </Grid>
        </Grid>
        <Grid className={styles.secondGrid} item xs={12}> 
          <Grid item xs={11}> 
            <input
              type="email"
              name="email"
              className={styles.emailInput}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid className={styles.secondGrid} item xs={1}> 
            <BsArrowRight />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InternalBody;
