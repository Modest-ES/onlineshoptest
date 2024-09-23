import React from 'react';

import styles from './CartContent.module.scss';

import delete_icon from "../assets/icons/delete.svg";
import plus from "../assets/icons/plus.svg";
import minus from "../assets/icons/minus.svg";

export default function CartContent() {
    return (
        <div className={styles.item_category}>
            <h2>Корзина</h2>
            <div className={styles.cart}>
                <div className={styles.cart_left}>
                    <div className={styles.cart_item}>
                        <div className={styles.cart_item_left}>
                            <img src="../img/earbud1.png" alt="alt" title="title" className={styles.cart_item_image}/>
                            <div className={styles.cart_item_count_row}>
                                <img src={minus} alt="-" title="-"/>
                                <p className={styles.cart_item_count}>1</p>
                                <img src={plus} alt="+" title="+"/>
                            </div>
                        </div>
                        <div className={styles.cart_item_main}>
                            <div className={styles.cart_item_info}>
                                <h3 className={styles.cart_item_title}>Apple BYZ SB521</h3>
                                <p>2927 ₽</p>
                            </div>
                            <div className={styles.cart_item_right}>
                                <img src={delete_icon} alt='Удалить' title='Удалить предмет из корзины' className={styles.delete_button}/>
                                <h3>2927 ₽</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cart_right}>
                    <div className={styles.total_row}>
                        <p>ИТОГО</p>
                        <p>₽ 2927</p>
                    </div>
                    <button className={styles.checkout}>
                        <p>Перейти к оформлению</p>
                    </button>
                </div>
            </div>
        </div>
    );
};