import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:1000px;
    background-color:Red;
    display:Flex;
    align-items:center;

    .icon{
        width:20px;
        height:20px;
        color:red;
        margin-right:10px;
    }

    .background-left{
        background-color:white;
        width:250px;
        height:100%;

        img{
            position:absolute;
            margin-top:100px;
            width:300px;
            height:300px;
            transform: rotate(-45deg);
            left:-140px;
        }
    }

    

    .background-circle{
        display:flex;
        flex-direction:column;
        padding-left:0px;
        width:50%;
        height:100%;
        background-color:white;
        border-radius: 0% 900px 900px 0%;
        justify-content:center;
    }

    .background-circle-bold{
        h1{
            padding:0px;
            margin:0px;
            font-size:48px;
        }
        margin-left:100px;
    }

    .background-circle-text{
        width:50%;
        color:grey;
        font-size:14px;
        letter-spacing:2.5px;
        margin:20px 0px;
        margin-left:100px;
        
    }

    .background-circle-buttons{
        display:Flex;
        margin-left:95px;

        button{          
            padding:15px;
            width:180px;
            border:none;
            border-radius:45px;
            cursor:pointer;
            background-color:red;
            font-family: 'Roboto', sans-serif;
            font-size:16px;
            margin-right:20px;
            color:white;
        }

        button:hover{
            opacity:.5;
        }

        .btn-play{
            color:grey;
            display:flex;
            align-items:center;
            background-color:white;
            font-size:14px;
            border:1px solid grey;
        }
    }

    .background-circle-img{
        position:absolute;
        margin:0px;
        padding:0px;
        width:45%;
        margin-left:650px;

        img{
            margin:0px;
            padding:0px;
            width: 100%;
            border:2px solid yellow;
            transform: rotate(-10deg);
            border-radius: 900% 900% 900% 900%;
            padding-right:-55px;
            background-color:transparent;
        }
        
    }

    .background-circle-social{
        margin-left:105px;
        margin-top:25px;
    }

    .icon-social{
        width:16px;
        height:16px;
        color:red;
        margin-right:10px;
        cursor:pointer;
        border:1px solid red;
        border-radius:15px;
        padding:4px;
    }

    .icon-social:hover{
        opacity:.6;
    }
`;

