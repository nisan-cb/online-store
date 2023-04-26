import { FC, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { actions as viewActions } from '../../../../store/view/viewSlice'
// import { Link } from "react-router-dom";
// import { getActiveCategory } from "../../../../store/view/viewSelectors";
import Link from 'next/link';
import styles from './navbar.module.scss'
import config from "../../../../config.json";
interface NavbarProps {
}

const Navbar: FC<NavbarProps> = ({ }) => {
    const categoriesList = config.categories;

    const displayList = () => {
        return categoriesList.map(item => <li key={item}>
            <Link
                href={`/collection/${item}`}
            >{item}</Link></li>);
    }

    return (
        <div className={styles.root}>
            <ul>{displayList()}</ul>
        </div>
    )
}

export default Navbar;
