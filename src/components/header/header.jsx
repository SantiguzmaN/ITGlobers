import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { GiUmbrellaBayonet, GiShoppingCart, GiKnapsack, GiRockingChair, GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';

import styles from './header.module.scss';
import { CSSTransition } from 'react-transition-group';

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className={styles.Header}>
      <img src={`${process.env.PUBLIC_URL}/icon_menu.png`} className={styles.Logo} alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames={styles.NavAnimation}
        unmountOnExit
      >
        <nav className={styles.Nav}>
          <Grid className={styles.navLinks} container> 
            <Grid className={styles.gridIcon} item xs={12}> 
              <GiRockingChair size="30" />
            </Grid>
            <Grid className={styles.navLinks} item xs={12}>
              <a>PUFI PUFF</a>
            </Grid>
          </ Grid> 
          <Grid container> 
            <Grid className={styles.gridIcon} item xs={12}> 
              <GiUmbrellaBayonet size="30" />
            </Grid>
            <Grid className={styles.navLinks} item xs={12}>
              <a>PUFI RAIN</a>
            </Grid>
          </ Grid> 
          <Grid container> 
            <Grid className={styles.gridIcon} item xs={12}> 
              <GiShoppingCart size="30" />
            </Grid>
            <Grid className={styles.navLinks} item xs={12}>
              <a>PUFI CART</a>
            </Grid>
          </ Grid> 
          <Grid container> 
            <Grid className={styles.gridIcon} item xs={12}> 
              <GiKnapsack size="30" />
            </Grid>
            <Grid className={styles.navLinks} item xs={12}>
              <a>PUFI NAP</a>
            </Grid>
          </ Grid> 
          <Grid container> 
            <Grid className={styles.navText} item xs={12}>
              <a className={styles.navText}>MI CUENTA <IoIosArrowDown /></a>
            </Grid>
          </ Grid> 
          <Grid container> 
            <Grid className={styles.navText} item xs={12}>
              <a className={styles.navText}>MI COMPRA</a>
            </Grid>
          </ Grid> 
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className={styles.Burger}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
}
