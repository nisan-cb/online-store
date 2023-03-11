import styled from "styled-components";

export const FilterWrapper = styled.div`
    width: 30%;
    height:600px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 0 10px;
    position: sticky;
    top: 20px;

    #filter-title{
        width:100%;
        padding: 10px 5px;
        font-size: 1.3rem;
        text-align: left;
    }

    @media (max-width: 750px)  {
        display: none;
    }
`