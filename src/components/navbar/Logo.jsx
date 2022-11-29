import React from 'react';
import styles from './Logo.module.scss';
import LogoIcon from '../../assets/logo.svg';

export default function Logo() {
    return <div className={styles.logo__wrapper}>
        <LogoIcon className={styles.logo} />
    </div>
}