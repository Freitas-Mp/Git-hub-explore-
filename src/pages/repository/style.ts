import styled from "styled-components"
import { shade } from "polished"

export const Headers=styled.header`
   display: flex;
   align-items:center;
   justify-content:space-between;

   a{
     display: flex;
     align-items:center;
     text-decoration:none;
     color:#A8A8B3;
     transition: color 0.2s;

     &:hover{
       color:${shade(0.2,"#A8A8B3")}
    }

     svg{
         margin-right:4px;
     }
   }
`

export const RepositoryInfo=styled.section`
  margin-top:80px;
 header{
    display: flex;
    align-items: center;

    img{
        width: 120px;
        height: 120px;
        border-radius: 100%;
    }
    div{
        margin-left:20px;
        strong{
            color: #3D3D4D;
            font-size:36px;
        }
        p{
            color:#737380;
            font-size: 20px;
            line-height: 23px;
        }
    }

    
 }

     ul{
         margin-top:20px;
        display: flex;
        align-items: center;
        li{
           list-style:none;
           & + li{
            margin-left:80px;
           }
           strong{
             display: block;
             font-size:36px;
             color:#3D3D4D;
           }
           p{
            display: block;
             font-size:20px;
             color:#6C6C80;
             margin-top:16px;
           }
        }
       
    }
`
export const Issues=styled.div`
   margin-top: 80px;
  
    a{
        background:#fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: flex;
        align-items: center;
        text-decoration:none;
        transition:transform 0.2s;
        
        & + a{
           margin-top:16px;
        }

        &:hover{
            transform: translateX(10px);
        }


        div{
            flex:1;
            margin-left:16px;

            strong{
                font-size:20px;
                color:#3D3D4D;
            }

            p{
                font-size:20px;
                color:#A8A8B3;
                margin-top:4px;
            }
        }

        svg{
            margin-left:auto;
            color:#C9C9D4
        }
    }   
`