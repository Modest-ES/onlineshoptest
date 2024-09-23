import React, { useContext } from 'react';

import styles from './CartContent.module.scss';
import { CartContext } from "../App.js";
import delete_icon from "../assets/icons/delete.svg";
import plus from "../assets/icons/plus.svg";
import minus from "../assets/icons/minus.svg";

export default function CartContent() {
    const { cart, removeFromCart, incrementItem, decrementItem, getTotalPrice } = useContext(CartContext);
    return (
        <div className={styles.item_category}>
            <h2>Корзина</h2>
            <div className={styles.cart}>
                <div className={styles.cart_left}>
                {cart.map(item => (
          <div key={item.id} className={styles.cart_item}>
            <div className={styles.cart_item_left}>
              <img src={item.image} alt={item.title} title={item.title} className={styles.cart_item_image} />
              <div className={styles.cart_item_count_row}>
              <img src={minus} alt="-" title="Уменьшить количество товаров" onClick={() => decrementItem(item.id)} />
                <p className={styles.cart_item_count}>{item.quantity}</p>
                <img src={plus} alt="+" title="Увеличить количество товаров" onClick={() => incrementItem(item.id)}/>
              </div>
            </div>
            <div className={styles.cart_item_main}>
              <div className={styles.cart_item_info}>
                <h3 className={styles.cart_item_title}>{item.title}</h3>
                <p>{item.price} ₽</p>
              </div>
              <div className={styles.cart_item_right}>
                <img src={delete_icon} alt="Удалить" title="Удалить товар" onClick={() => removeFromCart(item.id)}/>
                <h3>{item.price * item.quantity} ₽</h3>
              </div>
            </div>
          </div>
        ))}
                </div>
                <div className={styles.cart_right}>
                    <div className={styles.total_row}>
                        <p>ИТОГО</p>
                        <p>₽ {getTotalPrice()}</p>
                    </div>
                    <button className={styles.checkout}>
                        <p>Перейти к оформлению</p>
                    </button>
                </div>
            </div>
        </div>
    );
};