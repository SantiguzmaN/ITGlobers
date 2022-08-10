import React from 'react';
import styles from './header.module.scss';
import { MenuItems } from './menuItems';

const Header = () => {
  return (
    <nav className={styles.navbarItems}>
      <div className={styles.navbarLeft}>
        <img src={`${process.env.PUBLIC_URL}/icon_menu.png`} alt="pufi" className={styles.logo}  />
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.Title}
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
