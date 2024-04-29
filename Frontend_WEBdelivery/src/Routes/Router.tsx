import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Menu from "../Pages/Menu";
import Home from "../Pages/Home";
import Plat from "../Pages/Plat";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/Plat" element={<Plat/>} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
