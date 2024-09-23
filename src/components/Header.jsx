import React from 'react';

import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.jsx';

import favorites from "../assets/icons/favorites.svg";
import cart from "../assets/icons/cart.svg";

export default function Header() {
    return (
        <header>
          <Link to="/">
            <h1 className={styles.title}>QPICK</h1>
          </Link>
          <div className={styles.header_right}>
            <div className={styles.favorites}>
                <img src={favorites}/>
                <ItemCount amount={2} />
            </div>
            <Link to='/cart'>
                <div className={styles.cart}>
                <img src={cart}/>
                    <ItemCount amount={1}/>
                </div>
            </Link>
          </div>
        </header>
    );
};