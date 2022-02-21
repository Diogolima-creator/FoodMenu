import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:700px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f9f9f9
    ;
    .about{
        padding-left:100px;
        display:flex;
        justify-content:center;
        align-items:center;
    } 

   .about-img{
        width:400px;
        height:400px;

        .circle-yellow{
            position:absolute;
            width:400px;
            height:400px;
            border:2px solid #b2b200;
            border-radius:50%;
            z-index:1;
        }

        img{
            position:relative;
            width:100%;
            height:100%;
            padding-left:100px;
            z-index:2;
        }
   }

   .about-text{
        width:40%;
        height:100%;
        padding-left:200px;

       p{
            margin:5px 0px;
            padding:0px;
            font-size:24px;
            color:red;
            font-weight:normal;
       }

       h1{
           margin:0px;
           padding:0px;
           font-size:48px;
           color:#404040;
           font-weight:bold;
       }

       .about-text-p{
            margin:0px;
            padding: 5px 0px;
            color:grey;
            letter-spacing:1.5px;
            font-size:14px;
            width:60%;
       }

       .about-btn{
           padding: 15px 10px;
           background-color:red;
           border:none;
           border-radius:45px;
           color:white;
           width:150px;
           margin-top:25px;
           cursor:pointer;
           font-weight:bold;
       }
   }

`;