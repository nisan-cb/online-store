import React, { FC } from "react";
import { Center, HeaderWrapper, Left, Right, Container } from "./header.css";
import config from '../../config.json'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Hamburger from "./components/hamburger/hamburger";
import Navbar from "./components/navbar/navbar";

const Header: FC = () => {
    const storeName = config.store_name;

    return (
        <HeaderWrapper>
            <Container>
                <Left>
                    <ShoppingCartIcon className="icons" color="info" />
                    <FavoriteIcon className="icons" color="info" />
                </Left>
                <Center>
                    <h3>
                        {storeName}
                    </h3>
                </Center>

                <Right>
                    <PersonIcon className="icons" color="info" />
                    <Hamburger />
                </Right>
            </Container>

            <Navbar />

        </HeaderWrapper>
    )
}

export default Header;
