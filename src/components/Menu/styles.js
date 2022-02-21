import styled from "styled-components";

export const Container = styled.div`

    display:flex;
    width:100%;
    height:1300px;
    

    .left, .right{
        width:350px;
        height:100%;

        img{
            position:relative;
            width:400px;
            height:580px;
            background-color:white;
            transform: rotate(50deg);
            margin-top:-115px;
            margin-left:-55px;
        }

        .right-Img{
            width:300px;
            height:300px;
            margin-top:300%;
            margin-left:130px;
            background-color:white;
            transform: rotate(0deg);
        }
    }

    .center{
        width:54%;
        height:100%;
        margin-left:100px;
        
        p{
            color:Red;
            font-size:22px;
            font-weight:bold;
        }

        h1{
            margin:0px;
           padding:0px;
           font-size:42px;
           color:#404040;
           font-weight:bold;
        }

        .menu-center-text{
            margin-left:25px;
        }

        .menu-center-arrows{
            display:Flex;
            justify-content:space-between;

        }

        .menu-center-button{
            margin-right:28px;
        }

        button{
            margin-left:12px;
            margin-right:8px;
            background-color:Red;
            color:White;
            padding: 10px 15px;
            border:none;
            border-radius: 15px 15px 0px 15px;
            cursor:pointer;

            .icon{
                width:20px;
                height:20px;
            }
        }

        .btn-right{
            border-radius: 15px 15px 15px 0px;
        }

        .menu-center-options{
            width:100%;
        }

        .menu-center-card{
            display:Flex;
            align-items:center;
            justify-content:center;
            margin-top:45px;

            p{
                
                font-size:16px;
                color:#606060;
                font-weight:normal;
            }
        }

        .menu-center-card-item{
            display:flex;
            flex-wrap: wrap;
            margin-top:50px;
            align-items:center;
            justify-content:center;
            text-align:center;

            p{  
                margin:8px;
                padding:0px;
                font-size:14px;
                font-weight:bold;
                color:#404040;
            }
        }

        .btn-footer{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;
        }

        .btn-see{
            display:Flex;
            width: 180px;   
            align-items:center;
            justify-content:center;
            border-radius:45px;

            p{
                padding: 6px 0px;
                margin:0px;
                font-size:15px;
                font-weight:normal;
                color:White;
            }

            .iconRight{
                width:20px;
                height:20px;
                margin-left:20px;
            }
        }

        
    }
`;