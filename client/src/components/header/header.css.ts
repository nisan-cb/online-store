import styled from "styled-components";


export const HeaderWrapper = styled.header`
    width:100%;
    height: fit-content;
    /* min-height: 80px; */
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 25px 10px;

    .icons{
        margin: 0 10px;
        cursor: pointer;
    }
`
export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: row;
    margin-bottom:25px;
`
const GenericDiv = styled.div`
    /* padding: 10px; */
    width: fit-content;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: row;
`

export const Left = styled(GenericDiv)`
    /* background-color: #ffaf; */
    flex:0.5;
    justify-content: start;
`

export const Right = styled(GenericDiv)`
    /* background-color: #ffaf; */
    flex:0.5;
    justify-content: end;
`

export const Center = styled(GenericDiv)`
    /* background-color: #fdf; */
    flex:1;
    h3{
        font-size: 32px;
        margin:0;
        cursor: pointer;
    }
`

export const Hamburger = styled.div`
    
`

