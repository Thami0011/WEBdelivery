import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Menu from "../Pages/Menu";



const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Register" element={<div>Register Thami&wissal</div>} />
          <Route index element={<div>Hello W&T</div>} />
          <Route path="/Menu" element={<Menu/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
