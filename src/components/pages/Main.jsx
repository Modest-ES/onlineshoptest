import React from "react";

import '../../app.scss';
import styles from './Main.module.scss';

import Header from '../Header.jsx';
import ItemCategory from '../ItemCategory.jsx';
import Footer from '../Footer.jsx';

export default function Main() {
  return (
      <div className={styles.shell}>
        <Header />
        <div className={styles.content}>
          <ItemCategory />
        </div>
        <Footer />
      </div>
  );
};