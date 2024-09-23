import React from 'react';

import styles from './Item.module.scss';

import star from "../assets/icons/star.png";

export default function Item({ image, title, price, old_price, rating }) {
    return (
        <div className={styles.item}>
            <img src={image} alt={title} title={title} className={styles.item_image} />
            <div className={styles.item_info}>
                <div className={styles.item_top_row}>
                    <h3 className={styles.item_title}>{title}</h3>
                    <div className={styles.price_section}>
                        <p className={styles.price}>{price} ₽</p>
                        {price !== old_price &&
                        <p className={styles.old_price}>{old_price} ₽</p>}
                    </div>
                </div>
                <div className={styles.item_bottom_row}>
                    <div className={styles.rating_field}>
                        <img src={star} alt='Rating' title='rating' />
                        <p className={styles.rating_number}>{rating}</p>
                    </div>
                    <h3 className={styles.buy_button}>Купить</h3>
                </div>
            </div>
        </div>
    );
};