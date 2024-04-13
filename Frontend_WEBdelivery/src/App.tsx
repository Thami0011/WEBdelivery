import { useState } from 'react';
import LoginForm from './Components/LoginFrom'; 
import RegisterForm from './Components/RegisterForm'; 
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login'; 
import Register from './Pages/Register'; 

import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    
    <BrowserRouter>
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Register" element={<div>Register Thami&wissal</div>} /> 
      <Route index element={<div>Hello W&T</div>} /> 
    </Routes>
  </BrowserRouter></>
    
  );
}

export default App;
