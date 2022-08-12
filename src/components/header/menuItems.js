import { GiUmbrellaBayonet, GiShoppingCart, GiKnapsack, GiRockingChair } from 'react-icons/gi';
import styles from './header.module.scss';

export const MenuItems = [
  {
    title: 'PUFI PUFF',
    url: '#',
    cName: styles.navLinks, 
    icon: <GiRockingChair size="30" />
  },
  {
    title: 'PUFI RAIN',
    url: '#',
    cName: styles.navLinks,
    icon: <GiUmbrellaBayonet size="30" />
  },
  {
    title: 'PUFI CART',
    url: '#',
    cName: styles.navLinks,
    icon: <GiShoppingCart size="30" />
  },
  {
    title: 'PUFI NAP',
    url: '#',
    cName: styles.navLinks,
    icon: <GiKnapsack size="30" />
  }
];
