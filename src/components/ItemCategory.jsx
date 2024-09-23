import React from 'react';

import styles from './ItemCategory.module.scss';

import Item from './Item.jsx';

import earbudsData from '../assets/earbuds.json'; 
import wirelessEarbudsData from '../assets/wireless_earbuds.json'; 

export default function ItemCategory() {
    return (
        <div className={styles.item_category}>
            <h2>Наушники</h2>
            <div className={styles.items_list}>
                {earbudsData.map(item => (
                    <Item
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        old_price={item.old_price}
                        rating={item.rating}
                    />
                ))}
            </div>
            <h2>Беспроводные наушники</h2>
            <div className={styles.items_list}>
                {wirelessEarbudsData.map(item => (
                    <Item
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        old_price={item.old_price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
    );
};