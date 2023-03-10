import React, { FC } from "react";
import { Center, HeaderWrapper, Left, Right } from "./header.css";
import config from '../../config.json'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Hamburger from "./components/hamburger";

const Header: FC = () => {
    const storeName = config.store_name;

    return (
        <HeaderWrapper>
            {/* left */}
            <Left>
                <ShoppingCartIcon className="icons" color="info" />
                <FavoriteIcon className="icons" color="info" />
            </Left>
            {/* center */}
            <Center>
                <h3>
                    {storeName}
                </h3>
            </Center>

            {/* right */}
            <Right>
                <PersonIcon className="icons" color="info" />
                <Hamburger onClickFunc={() => console.log('hamburger')} />
            </Right>
        </HeaderWrapper>
    )
}

export default Header;
