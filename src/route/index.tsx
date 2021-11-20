import React from "react";
import { Route, Routes } from "react-router-dom"
import { Dashbord } from "../pages/Dashbord"
import { Repository } from "../pages/repository"

const _Route: React.FC=()=>(

    <Routes>
        <Route path="/"  element={<Dashbord />}/>
        <Route path="/repositories/:repository/*" element={<Repository />} />
    </Routes>

)

export { _Route  as Routes }