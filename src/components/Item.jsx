import React, { useContext } from 'react';
import styles from './Item.module.scss';
import star from "../assets/icons/star.png";
import { CartContext } from '../App.js'; // Import the context from App.js

export default function Item({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.title} title={item.title} className={styles.item_image} />
      <div className={styles.item_info}>
        <div className={styles.item_top_row}>
          <h3 className={styles.item_title}>{item.title}</h3>
          <div className={styles.price_section}>
            <p className={styles.price}>{item.price} ₽</p>
            {item.old_price && item.old_price !== item.price && (
              <p className={styles.old_price}>{item.old_price} ₽</p>
            )}
          </div>
        </div>
        <div className={styles.item_bottom_row}>
          <div className={styles.rating_field}>
            <img src={star} alt='Rating' title='rating' />
            <p className={styles.rating_number}>{item.rating}</p>
          </div>
          <h3 className={styles.buy_button} onClick={() => addToCart(item)}>Купить</h3>
        </div>
      </div>
    </div>
  );
}