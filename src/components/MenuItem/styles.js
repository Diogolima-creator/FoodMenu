import styled from "styled-components";

export const Container = styled.div`
        width:290px;
        height:350px;
        border:0px solid black;
        display:flex;
        flex-direction:column;
        padding:0px;
        margin: 0px 28px;
        margin-left:0px;
        margin-bottom:25px;
        align-items:center;
        justify-content:center;
        font-weight:bold;
        
        
        .caption{
            opacity:.6;
        }

        img{
            width:270px;
            height:180px;
            border-radius:25px;
        }

        button{
            display:flex;
            justify-content:center;
            align-items:center;
            width:20px;
            height:20px;
            border-radius:5px;
            font-size:26px;
        }

        .btn{
            
            display:flex;
        }

        .iconS{
            color:#bfbf00;
        }

        .stars{
            margin:5px 0px;
        }
`;