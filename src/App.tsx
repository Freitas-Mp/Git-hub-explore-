import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { Routes } from './route'
import Global from './style/global';

const App: React.FC =()=> (
  <>
    <BrowserRouter>
     <Routes />
    </BrowserRouter>
    <Global />
  </>


)

export default App;
