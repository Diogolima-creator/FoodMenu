import styled from "styled-components";

export const Container = styled.div`
        width:100%;
        display:flex;
        flex-direction:column;
        height:500px;
        align-items:center;
        margin-top:50px;

        .memorial-text{
            display:flex;
            flex-direction:column;
            align-items:center;

            p{
                font-size:22px;
                color:Red;
                font-weight:bold;
            }

            h1{
                margin:0px;
                font-size:58px;
                color:#404040;
            }

            .memorial-text-long{
                width:60%;
                font-size:18px;
                padding-left:105px;
                font-weight:normal;
                color:#404040;
                opacity:.7;
            }
        }

        .memorial-carousel{
            width:45%;
            height:300px;
            display:Flex;
            align-items:center;
            justify-content:center;
            padding:0 20px;
            padding-right:0px;

            .owl-nav{
                display:flex;
                align-items:center;
                justify-content:center;

                span{
                    padding-bottom:7px;
                }

                .owl-prev, .owl-next{
                    display:flex;
                    align-items:center;
                    background-color:red;
                    height:38px;
                    width:62px;
                    padding: 0px !important;
                    font-size:42px;
                    font-weight:bold;
                    color:white;
                    margin:30px 30px;
                    justify-content:center;
                    border-radius: 0px 10px 10px 10px;
                    box-shadow: 0px 0px 5px 1px red;
                }

                .owl-next{
                    border-radius: 10px 15px 0px 15px;
                }
            }
        }

        .owl-carousel .owl-stage-outer{
            padding:5px;
        }

`;