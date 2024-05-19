import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/login'; 
import Home from '../Component/home';
import Commande from "../pages/Commande";
import Register from '../Component/register';
import SuiviCommande from "../pages/SuiviCommande";
const Router = () => 
  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Commande" element={<Commande />} />
        <Route path="/register" element={<Register />} />
        <Route path="/suivi" element={<SuiviCommande />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
