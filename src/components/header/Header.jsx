import React from 'react';
import styles from './Header.module.scss';
import bgGoods from './../../assets/bg-goods.png';

export default function Header() {
    return <div className={styles.header__wrapper}>
        <div className={styles.header}>
            <div className={styles.header__slogan}>
                <h1>АКТИВИРУЙ ИММУНИТЕТ!</h1>
                <p>{"Всего пять секунд в день помогут укрепить иммунитет\nи повысить защитные силы организма"}</p>
            </div>
            <div className={styles.header__motto}>
                <h2>NOOTRIS ПОМОГАЕТ</h2>
                <p>{"Вашему организму во время пандемии\nи сезонных простуд"}</p>
            </div>
        </div>
        <img src={bgGoods} alt='nootris' className={styles.header__goods} />
    </div>
}