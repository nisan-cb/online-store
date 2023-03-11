import styled from "styled-components";

export const ListWrapper = styled.div`
    width: 100%;
    /* max-width: 100%; */
    /* display: flex;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
    overflow: hidden;
    padding:  0 20px;


    .item-card{
        flex:1 1 0;
        /* flex-basis: 0; */
        /* margin: 10px; */
        /* max-width:; */
    }

`