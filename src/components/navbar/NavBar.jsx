import styles from './NavBar.module';
import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import Basket from "./Basket";

export default function NavBar() {
    return <nav className={styles.navbar}>
        <div className={styles.navbar__content}>
            <Logo />
            <Menu />
            <Basket />
        </div>
    </nav>
}