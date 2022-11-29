import React from 'react';
import styles from './Basket.module.scss';
import BasketIcon from '../../assets/basket.svg';

export default function Basket({goodsCount = 1}) {
    return <div className={styles.basket__wrapper}>
        <BasketIcon className={styles.basket} />
        <span className={styles.basket__goods}>{goodsCount}</span>
    </div>
}