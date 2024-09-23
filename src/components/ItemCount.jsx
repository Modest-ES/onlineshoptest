import React from 'react';

import styles from './ItemCount.module.scss';

export default function ItemCount({amount}) {
    return (
        <p className={styles.item_count}>{amount}</p>
    );
};