import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavbarWrapper } from "./navbar.css";
import { actions as viewActions } from '../../../../store/view/viewSlice'
import { Link } from "react-router-dom";
import { getActiveCategory } from "../../../../store/view/viewSelectors";

const array = ['option1', 'option2', 'option3', 'option4', 'option5']

const Navbar: FC = () => {
    const dispatch = useDispatch();
    const [list, setList] = useState<string[]>([]);
    const activeCategory = useSelector(getActiveCategory)

    useEffect(() => {
        setList(array);
    }, []);

    const clickHandler = (category: string) => {
        dispatch(viewActions.setActiveCategory(category));
    }

    const displayList = () => {
        return list.map(item => <li key={item} className={item === activeCategory ? "selected" : ""}><Link
            to={`/store/${item}`}
            id={item}
            onClick={() => clickHandler(item)}
        >{item}</Link></li>);
    }

    return (
        <NavbarWrapper>
            <ul>{displayList()}</ul>
        </NavbarWrapper>
    )
}

export default Navbar;
