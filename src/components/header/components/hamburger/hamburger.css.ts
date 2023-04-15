import styled from "styled-components";

export const HamburgerWrapper = styled.div<{ isActive: boolean }>`
    display: none;
    cursor: pointer;

    .bar{
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: #101010;
    }

    @media (max-width: 560px) {
        display: block;

        .bar:nth-child(2) {
            opacity: ${props => props.isActive ? 0 : 1};
        }

        .bar:nth-child(1) {
            transform: ${props => props.isActive ? 'translateY(8px) rotate(45deg)' : ''};
        }

        .bar:nth-child(3) {
            transform: ${props => props.isActive ? 'translateY(-8px) rotate(-45deg)' : ''};
        }
    }
`