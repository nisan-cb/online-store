import styled from "styled-components";

export const CardWrapper = styled.div`
    min-width:150px;
    min-height: 150px;
    /* border: 1px solid red; */
    /* margin: 225px; */
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom:25px;
    position:relative;

    span{
        margin-bottom: 5px;
    }
    .item-card-title{
        font-weight:bold;
        font-size: 14px;
    }

    .item-card-price{
        /* font-size: 16px; */
    }

    .item-card-more-info{}

    .like-icon-wrapper{
        position: absolute;
        top:10px;
        right:10px;
        cursor: pointer;
    }
`
export const Img = styled.img<{ src: string }>`
    width:100%;
    flex-grow: 1;
    margin-bottom:15px;
`