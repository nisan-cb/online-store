import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    width:80%;
    min-height:20px;
    border-top: 1px solid black;
    padding:10px 0;


    ul{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li{
        list-style: none;
        margin: 0 20px;
        cursor: pointer;
    }

    @media (max-width: 550px) {
        display: none;
    }
`