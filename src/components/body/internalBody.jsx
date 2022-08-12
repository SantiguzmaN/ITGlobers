import React, { useState } from 'react';
import styles from './body.module.scss';
import { Grid } from '@material-ui/core';
import { BsArrowRight } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

const InternalBody = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.emails);

  const addEmail = () => {
    dispatch({
      type: 'ADD_EMAIL',
      payload: email ,
    });
  };

  const validateEmail = () => {
    const ExpRegEmail = 
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    if (email.match(ExpRegEmail) != null){
      setEmail('');
      addEmail();
      toast.success('Suscripcion Exitosa!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      toast.error('Correo Invalido, verifiquelo e intente nuevamente', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <div>
      <Grid className={styles.bodyContainer} container> 
        <Grid item xs={8}> 
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
              <button onClick={() => validateEmail()}> 
                <BsArrowRight />
              </button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {emails.map((item, i) => {
        return (
          <Grid key={i} className={styles.emailsContainer} item xs={12}>
            <span className={styles.addedEmails}>Usuario: {i+1} , E-mail: {item}</span>
          </Grid>
        );
      })}
    </div>
  );
};

export default InternalBody;
