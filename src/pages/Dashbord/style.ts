import styled,{ css } from "styled-components"
import { shade } from "polished"

interface FormPros{
    hasError:boolean
}

export const Title=styled.h1`
    font-size:48px;
    color:#3A3A3A;
    margin-top:80px;
    max-width:450px;
    line-height:56px;
`

export const Form=styled.form<FormPros>`
  max-with:700px;
  background: #FFFFFF;
  margin-top: 40px;
  display: flex;
  border-radius: 0px 5px 5px 0px;

    input{
        flex:1;
        border-radius:5px 0 0 5px;
        border:0;
        height:70px;
        padding:0 24px;
        color:#3A3A3A;
        border:2px solid #ffff;
        border-right:none;
        
        ${ 
           (props) =>props.hasError 
                     && css` border-color: #c53030;`
                 
         }

        &::placeholder{
            color: #a8a8b3;
        }
    }

    button{
        width: 210px;
        height: 70px;
        background: #04D361;
        border-radius: 0px 5px 5px 0px;
        border:0;
        font-weight:bold;
        transition:background-color 0,2s;

        &:hover{
            background: ${ shade(0.2,"#04D361") }
        } 
    }
`
export const Error =styled.span`
    display: block;
    color:#c53030;
    margin-top:6px
`

export const Repository=styled.div`
    margin-top: 80px;
    max-width: 700px;
  
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

        img{
            width: 65px;
            height: 65px;
            border-radius: 100%;
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