import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:500px;

    .background{
        width:100%;
        height:500px;
        position:absolute;
        background-image:url(images/footer.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(4px);
        z-index:1;
    }

    .footer-top{
        position:absolute;
        width:100%;
        height:300px;
        background-color: rgba(0,0,0, 0.7); 
        z-index:2;
        margin:0px;
        padding:0px;
        display:Flex;
        padding-top:100px;

        .footer-company{
            margin-left:20px;
            h1{
                font-size:24px;
                color:white;
            }

            p{
                color:white;
            }
        }

        .footer-services{
            margin-left:80px;

            h1{
                font-size:24px;
                color:white;
            }

            p{
                color:white;
            }
        }

        .footer-updates{
            margin-left:80px;

            h1{
                font-size:24px;
                color:White;
            }

            .footer-updates-input{

                background-color:white;
                width:100%;
                height:45px;
                display:flex;
                align-items:center;

                input{
                    border:none;
                    height:35px;
                    outline:none;
                    width:78%;
                    padding: 2px 5px;
                    background-color:white;
                }

                button{
                    border-radius:5px;
                    height:38px;
                    width:45px;
                    border:none;
                    cursor:pointer;
                    color:White;
                    background-color:red;
                }
            }
        }
        
        .footer-social{
            margin-top:15px;
            
            a{
                cursor:pointer;
                height:102px;
                background:grey;
                color:White;
                margin:0px 10px;
                padding:8px 0px;
                padding-top:12px;
                border-radius:5px;
            }

            .icon-social{
                width:24px;
                height:24px;
                margin:0 8px;
            }
        }
    }

    

    hr{
        position:relative;
        top:400px;
        z-index:4;
        color:white;
        width:100%;
        height:0px;
        margin:0px;
        
    }

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
        width:20%;
        color:Red;
        cursor:pointer;
        flex-direction:column;
        
        h1{
            font-size:18px;
            color:white;
        }

        p{
            width:40%;
            font-size:14px;
            color:white;
            
        }
    }

    .footer-bottom{
        position:relative;
        width:100%;
        height:100px;
        background-color: rgba(0,0,0, 0.7); 
        z-index:2;
        margin:0px;
        padding:0px;
        display:Flex;
        top:400px;
        align-items:center;
        justify-content:center;
        flex-direction:column;

        p{
            margin:0px;
            padding:0px;
            color:white;
            font-size:14px;
        }

        
    }
`;