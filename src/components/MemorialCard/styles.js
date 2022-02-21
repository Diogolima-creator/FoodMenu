import styled from "styled-components";

export const Container = styled.div`
        width:400px;
        height:180px;
        padding:5px 10px;
        box-shadow: 0px 0px 5px -2px black;
        border-radius:15px;
        margin-top:50px;
        
        .stars{
                display:flex;
                margin-left:100px;
        }

        .iconS{
                color:#bfbf00;
                margin-left:5px;
                
        }

        .memorial-header{
                display:flex;
                justify-content:start;
                padding:5px 10px;
                align-items:center;

                img{
                        width:45px;
                        height:45px;
                        border-radius:45px;
                        margin-right:5px;
                        margin:0px;
                        padding:0px;
                }
        }

        .memorial-header-profile{
                display:Flex;
                flex-direction:column;
                justify-content:start;
                align-items:start;
                margin-top:8px;

                p{
                        margin:0px;
                        padding:0px;
                        margin-left:5px;
                        font-size:12px;
                        
                }
                
                .name{
                        font-weight:bold;
                        font-size:16px;
                }
        }

        .memorial-text{
                padding:5px 10px;
                p{
                        font-size:14px;  
                        color: #404040;
                        opacity:.7;
                }
                
        }
        
`;