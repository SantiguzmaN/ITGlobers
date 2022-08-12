import React from 'react';
import styles from './header.module.scss';
import { MenuItems } from './menuItems';
import { Grid } from '@material-ui/core';

const Header = () => {
  return (
    <nav className={styles.navbarItems}>
      <div className={styles.navbarLeft}>
        <img src={`${process.env.PUBLIC_URL}/icon_menu.png`} alt="pufi" className={styles.logo}  />
        <ul>
          {MenuItems.map((item, i) => {
            return (
              <li key={i}>
                <a className={item.cName} href={item.url}>
                  <Grid className={styles.titleContainer} container> 
                    <Grid className={styles.gridIcon} item xs={12}> 
                      {item.icon}
                    </Grid>
                    <Grid className={styles.gridIcon} item xs={12}>
                      {item.title}
                    </Grid>
                  </ Grid> 
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.navbarRight}>
        <ul>
          <li className={styles.navbarEmail}>Mi Cuenta</li>
          <li className={styles.navbarEmail}>Mi Compra</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
