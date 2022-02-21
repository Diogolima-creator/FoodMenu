import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:600px;
    overflow:hidden; 

    .features-img{
        width:250px;
        height:250px;
        float:right;
        margin-right:-60px;
        margin-top:-75px;
        display:flex;

        img{
            
            width:100%;
            height:100%;
        }
    }

    .features-div{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin-left:150px;
        margin-top:100px;

        p{
            font-weight:bold;
            color:red;
            font-size:22px;
        }

        h1{
            margin:0px;
           padding:0px;
           font-size:42px;
           color:#404040;
           font-weight:bold;
        }
    }

    .features-cards{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;

        .card{
            margin-top:25px;
            width:280px;
            height:230px;
            margin-right:20px;
            background-color: #ffe9ed;
            padding-left:20px;

            img{
                width:80px;
                height:72px;
                margin-left:0px;
                margin-top:10px;
            }
        }
        
        .icon{
            padding:0px;
            width:48px;
            height:48px;
            margin-top:20px;
            margin-bottom:15px;
            color:black;
        }

        .card-title{
            margin:0px;
            color:#5a5a5a;
            font-size:22px;
            font-weight:bold;
        }

        .card-text{
            
            color:grey;
            font-size:14px;
        }

        .card-more{
            color:Red;
            font-weight:bold;
            font-size:16px;
        }
    }
`;