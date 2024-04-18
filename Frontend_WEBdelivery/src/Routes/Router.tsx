import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
<<<<<<< HEAD
import Menu from "../Pages/Menu";


=======
import Home from "../Pages/Home";
>>>>>>> 2e57d7ddd801a8088e101a5b26cf04d9c60477db

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
<<<<<<< HEAD
          <Route path="/Register" element={<div>Register Thami&wissal</div>} />
          <Route index element={<div>Hello W&T</div>} />
          <Route path="/Menu" element={<Menu/>} />
=======
          <Route index element={<Home />} />
>>>>>>> 2e57d7ddd801a8088e101a5b26cf04d9c60477db
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
