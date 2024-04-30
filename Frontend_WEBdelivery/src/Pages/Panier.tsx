import React from 'react'
import { BoxesCore } from '../Components/GridBackground'
import ProductTable from '../Components/ProductTable'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import MagicButton from '../Components/magicButton';

const Panier = () => 
{
  const navigate=useNavigate();
  const ajouterCommande = async () => {
    try {
      await axios.post
      (
        "http://localhost:8085/Commander",sessionStorage.getItem("username")
       
      );
      (navigate("/"));
      
    } catch (error) {
      console.error("Erreur lors de l'ajout du plat au panier :", error);
    }
  };



  return (
    <>
   
    <ProductTable/>
    <MagicButton text="Valider votre commande" onClick={ajouterCommande}/>

    </>
  )
}

export default Panier
