import { createGlobalStyle } from "styled-components"
import githubLogoBackground from "../assets/github.png"

 
export default createGlobalStyle`

  *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      
  }

  body{
      background:#F2F2FA url(${githubLogoBackground}) no-repeat 70% top;
      --webkit-font-font-smooth:antialiazed;
  }

  body,input,button{http://localhost:3000
      font:16px Roboto, sans-serif;
  }

  #root{
      max-width: 920px;
      margin: 0 auto;
      padding: 40px 20px;
  }
  button{
      cursor: pointer;
  }

`
