import styles from './Button.module';
import React from 'react';

export default function Button({label}) {
    return <button className={styles.button}>{label}</button>
}