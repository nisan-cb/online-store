import { FC, useEffect, useState } from "react";
import { NavbarWrapper } from "./navbar.css";

const array = ['option1', 'option2', 'option3', 'option4', 'option5']

const Navbar: FC = () => {

    const [list, setList] = useState<string[]>([]);

    useEffect(() => {
        setList(array);
    }, []);

    const displayList = () => {
        return list.map(item => <li key={item} id={item}>{item}</li>);
    }

    return (
        <NavbarWrapper>
            <ul>{displayList()}</ul>
        </NavbarWrapper>
    )
}

export default Navbar;
