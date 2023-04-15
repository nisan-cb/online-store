import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    width:80%;
    min-height:20px;
    /* border-top: 1px solid black; */
    padding:10px 0;
    box-sizing: border-box;
    margin: 20px 0 30px;
    font-size:1.2rem;


    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Roboto","Helvetica","Arial",sans-serif;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    li{
        list-style: none;
        margin: 5px 20px;
        cursor: pointer;
        padding:5px 0;
        border-bottom: 2px solid transparent;
        position: relative;
        /* letter-spacing: 2px; */
    }
    li::after{
        content: "";
        position: absolute;
        width:0%;
        height:2px;
        background-color: white;
        bottom:0;
        left:0;
        z-index:111;
        transition: all ease-out .15s;
        border-radius: 10px;
    }
    li:hover::after{
        width:100%;
    }

    .selected{
        color: blue;
    }

    @media (max-width: 550px) {
        display: none;
    }
`