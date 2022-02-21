import styled from "styled-components";

export const Container = styled.div`
        width:125px;
        height:125px;
        border:0px solid grey;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-radius:15px;
        margin-right:25px;
        cursor:pointer;
        box-shadow: 0px 0px 20px -7px #202020;
        transition:.4s;
        border:2px solid transparent;

        img{
            padding:0px;
            margin:0px;
            width:55%;
            height:55%;
        }

        &:hover{
            transform: scale(1.05);
            border:2px solid pink;
            box-shadow: 0px 0px 20px 0px pink;
        }

`;