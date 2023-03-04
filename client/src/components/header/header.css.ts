import styled from "styled-components";


export const HeaderWrapper = styled.header`
    width:100%;
    height: fit-content;
    /* min-height: 80px; */
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    padding: 12px 10px;
    .icons{
        margin: 0 10px
    }
`

const GenericDiv = styled.div`
    /* padding: 10px; */
    width: fit-content;
`

export const Left = styled(GenericDiv)`
    /* background-color: #ffaf; */
    
`

export const Right = styled(GenericDiv)`
    /* background-color: #ffaf; */
`

export const Center = styled(GenericDiv)`
    /* background-color: #fdf; */
    flex:1;
    h3{
        font-size: 32px;
        margin:0;
    }
`

