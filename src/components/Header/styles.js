import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    width:100%;
    height:90px;
    align-items:center;
    justify-content:space-between;
    background-color:rgba(255,255,255,.7);
    position:fixed;
    z-index:999;
    
    .icon{
        width:32px;
        height:32px;
        padding-right:20px;

    }

    .logo{
        display:flex;
        margin-left:350px;
        align-items:center;
        font-weight: 600;
        color:Red;
        cursor:pointer;
        
        p{
            font-size:18px;
            color:black;
        }
    }

    .menu-header{
        margin-right:500px;
        display:flex;
        align-items:center;
        font-size:18px;
        
        a{
            margin-left:25px;
            cursor:pointer;
            font-weight: normal;
            color:black;
            border-bottom:0px solid red;
            text-decoration:none;
        }

        a:hover{
            color:Red;
            border-bottom:2px solid red;
        }
    }
`;