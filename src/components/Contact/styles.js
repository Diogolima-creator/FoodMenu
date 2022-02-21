import styled from "styled-components";

export const Container = styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        width:100%;
        height:800px;
        margin-top:100px;

        .left, .right{
            width:33%;
            height:100%;
            
        }

        .left{
            height:100%;
            
        }

        .left-text{
            padding-top:60px;
            width:90%;
            display:flex;
            flex-direction:column;
            margin:15px;

            h1{
                font-size:48px;
                margin:0px;
                padding:0px;
                color:#404040; 
            }

            p{
                font-size:22px;
                color:red;
                font-weight:bold;
            }
            
            .text{
                color:#404040;
                opacity:.7;
                font-size:16px;
            }
        }

        .left-form form{
            display:flex;
            flex-direction:column;
            margin:15px;

            label{
                color:#404040;
                opacity:.4;
                font-weight:bold;
            }

            input, textarea{
                width:95%;
                height:50px;
                margin:15px 0px;
                padding 0px 10px;
                border:none;
                border-radius:4px;
                background-color: #e6e6e6;
                font-size:16px;
                outline:none;
            }

            textarea{
                height:100px;
                padding:10px;
                resize:none;
            }
        }

        .right-image{

            img{
                margin-left:170px;
                width:70%;
                height:70%;
            }
        }

        .right-text{
            
            margin-left:20px;
            p{
                fontsize:16px;
                color:#404040;
                opacity:.7;
            }

            h1{
                font-size:18px;
                color:#404040;
            }
        }

        .icon{
            color:black;
            margin-right:10px;
        }

        .iconDot{
            opacity:0;
            margin-right:10px;
        }

        button{
            margin:5px;
            width:95%;
            height:50px;
            background-color:red;
            border:none;
            cursor:pointer;
            color:white;
            font-weight:bold;
            font-size:18px;
            border-radius:4px;
            margin-top:15px;
            box-shadow: 0px 0px 6px 0px red;
        }
`;