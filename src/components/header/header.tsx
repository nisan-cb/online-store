import React, { FC, useEffect } from "react";
import config from '../../config.json'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
// import Hamburger from "./components/hamburger/hamburger";
import Navbar from "./components/navbar/navbar";
import Link from 'next/link'
import styles from './header.module.scss'
import Hamburger from "./components/navbar/hamburger/hamburger";

const Header: FC = () => {
    const storeName = config.store_name;

    return (
        <header id={styles.header}>
            <div className={styles.container}>
                <div className={styles.left}>
                </div>
                <div className={styles.center}>
                    <Link href="/"><h1>{storeName}</h1></Link>
                </div>
                <div className={styles.right}>
                    <Hamburger />
                </div>
            </div>
            <Navbar />
        </header>
    )
}

export default Header;
