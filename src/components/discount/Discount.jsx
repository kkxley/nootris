import React from 'react';
import styles from './Discount.module';
import Goods from "./Goods";

export default function Discount() {
    return <div className={styles.discount}>
        <div className={styles.discount__conteiner}>
            <h2 className={styles.discount__title}>
                <span>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА</span>{"\n"}
                <span className={styles.discount__title_orange}>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
            </h2>
            <Goods />
        </div>
    </div>
}