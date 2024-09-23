import React from "react";

import '../../app.scss';
import styles from './Main.module.scss';

import Header from '../Header.jsx';
import CartContent from '../CartContent.jsx';
import Footer from '../Footer.jsx';

export default function Cart() {
    return(
        <div className={styles.shell}>
            <Header />
            <div className={styles.content}>
                <CartContent />
            </div>
            <Footer />
        </div>
    );
};