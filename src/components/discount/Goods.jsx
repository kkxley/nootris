import React from 'react';
import styles from './Goods.module';
import GoodsItem from "./GoodsItem";
import Ingredient from "./Ingredient";

const GOODS = [
    {
        image: require('./../../assets/ginger.png'),
        title: "Содержит\nимбирь",
    },
    {
        image: require('./../../assets/nootris.png'),
        price: 690,
        oldPrice: 750,
        title: '+ Бесплатная доставка',
        additionalTitle: 'Специальная цена',
        isScaled: true
    },
    {
        image: require('./../../assets/vorus.png'),
        title: "Нейтрализует\nвирусы"
    },
];


export default function Goods() {
    return <div className={styles.goods}>
        <Ingredient {...GOODS[0]} />
        <GoodsItem {...GOODS[1]} />
        <Ingredient {...GOODS[2]} />
    </div>
}