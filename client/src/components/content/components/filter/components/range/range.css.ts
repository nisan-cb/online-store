import styled from "styled-components";

export const RangeWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    margin: 0 auto;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    #delimiter{
        margin: 0 8px;
    }

    #price-range-input{
        text-align: center;
        /* width: fit-content; */
    }
`

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:row;
    margin: 0 auto;
`

