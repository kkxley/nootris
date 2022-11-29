import React from 'react';
import styles from './GoodsItem.module';
import Button from "../../shared/Button";

export default function GoodsItem({image, price, oldPrice, title, additionalTitle}) {

    return <div className={styles.item}>
        <div className={styles.item__price}>
            <span className={styles.item__price_old}>{price}&#8381;</span>
            <span className={styles.item__price_new}>{oldPrice}&#8381;</span>
        </div>
        <div>
            <img src={image} alt={`${title} ${additionalTitle}`} />
        </div>
        <h3 className={styles.item__caption}>
            <span>{title}</span>{"\n"}
            <span className={styles.item__caption_orange}>{additionalTitle}</span>
        </h3>
        <div className={styles.item__button}>
            <Button label='Оформить заказ!' />
        </div>
    </div>
}