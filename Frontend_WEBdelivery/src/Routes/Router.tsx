import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Menu from "../Pages/Menu";
import Home from "../Pages/Home";
import Plat from "../Pages/Plat";
import Panier from "../Pages/Panier";
import SuiviCommande from "../Pages/SuiviCommande";
import Historique from "../Pages/Historique";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Menu" element={<Menu/>} />
          <Route path="/Plat" element={<Plat/>} />
          <Route path="/Panier" element={<Panier/>} />
          <Route path="/Historique" element={<Historique/>} />
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
