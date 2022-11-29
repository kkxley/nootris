import styles from './Menu.module.scss';
import React from "react";

const ITEMS = [
    {
        title: 'FAQ',
        link: '#'
    },
    {
        title: 'Оплата и доставка',
        link: '#'
    },
    {
        title: 'Возврат',
        link: '#'
    },
    {
        title: 'Исследования',
        link: '#'
    },
    {
        title: 'Личный кабинет',
        link: '#'
    },
    {
        title: '8 8 (800) 600-09-90',
        link: 'tel:888006000990'
    }
];

export default function Menu() {
    return <ul className={styles.menu}>
        {ITEMS.map((item) => <li className={styles.menu__item}>
            <a href={item.link}>{item.title}</a>
        </li>)}
    </ul>
}