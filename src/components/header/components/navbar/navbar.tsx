import { FC, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { actions as viewActions } from '../../../../store/view/viewSlice'
// import { Link } from "react-router-dom";
// import { getActiveCategory } from "../../../../store/view/viewSelectors";
import Link from 'next/link';
import styles from './navbar.module.scss'

const array = ['category-1', 'category-2', 'category-3', 'category-4', 'category-5']

const Navbar: FC = () => {
    // const dispatch = useDispatch();
    const [list, setList] = useState<string[]>([]);
    // const activeCategory = useSelector(getActiveCategory)

    useEffect(() => {
        setList(array);
    }, []);

    const clickHandler = (category: string) => {
        // dispatch(viewActions.setActiveCategory(category));
    }

    const displayList = () => {
        return list.map(item => <li key={item}>
            <Link
                href={`/collection/${item}`}
                id={item}
                onClick={() => clickHandler(item)}
            >{item}</Link></li>);
    }

    return (
        <div className={styles.root}>
            <ul>{displayList()}</ul>
        </div>
    )
}

export default Navbar;
