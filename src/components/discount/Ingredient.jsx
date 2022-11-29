import React from 'react';
import styles from './Ingredient.module';

export default function Ingredient({image, title}) {

    return <div className={styles.ingredient}>
        <div>
            <img src={image} alt={title} />
        </div>
        <h3 className={styles.ingredient__caption}>
            {title}
        </h3>
    </div>
}