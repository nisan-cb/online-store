
import React, { FC, useEffect, useState } from 'react'
import { HamburgerWrapper } from './hamburger.css';

interface HamburgerProps {
    onClickFunc?: (...args: any[]) => any;
}

const Hamburger: FC<HamburgerProps> = ({ onClickFunc }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        if (isActive) {
            onClickFunc?.();
        }
    }, [isActive]);

    const onClick = () => {
        setIsActive(prev => !prev);
    }

    return (
        <HamburgerWrapper onClick={onClick} isActive={isActive}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </HamburgerWrapper>
    )
}

export default Hamburger;
