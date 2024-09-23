import React from 'react';

import styles from './Footer.module.scss';

import { Link } from 'react-router-dom';

import vk from "../assets/icons/VK.svg";
import telegram from "../assets/icons/Telegram.svg";
import whatsapp from "../assets/icons/Whatsapp.svg";
import language from "../assets/icons/language.png";

export default function Footer() {
    return (
        <footer>
            <Link to="/">
                <h1 className={styles.title}>QPICK</h1>
            </Link>
            <nav className={styles.page_links}>
                <ul>
                    <li><Link to="/">Избранное</Link></li>
                    <li><Link to="/cart">Корзина</Link></li>
                    <li><Link to="/">Контакты</Link></li>
                </ul>
            </nav>
            <div className={styles.misc_links}>
                <Link to="/">
                    <p>Условия сервиса</p>
                </Link>
                <div className={styles.language_options}>
                    <img src={language}/>
                    <p>Каз</p>
                    <p className={styles.chosen_option}>Рус</p>
                    <p>Eng</p>
                </div>
            </div>
            <div className={styles.social_links}>
                <a href="https://vk.com" target='_blank'><img src={vk} /></a>
                <a href="https://web.telegram.org/" target='_blank'><img src={telegram} /></a>
                <a href="https://web.whatsapp.com/" target='_blank'><img src={whatsapp} /></a>
                
            </div>
        </footer>
    );
};