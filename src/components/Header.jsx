import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.jsx';
import { CartContext } from '../App.js'; // Import the context from App.js

import favorites from "../assets/icons/favorites.svg";
import cart_icon from "../assets/icons/cart.svg";

export default function Header() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <Link to="/">
        <h1 className={styles.title}>QPICK</h1>
      </Link>
      <div className={styles.header_right}>
        <div className={styles.favorites}>
          <img src={favorites} alt="Favorites" />
          <ItemCount amount={2} />
        </div>
        <Link to='/cart'>
          <div className={styles.cart}>
            <img src={cart_icon} alt="Cart" />
            <ItemCount amount={totalItems} />
          </div>
        </Link>
      </div>
    </header>
  );
}