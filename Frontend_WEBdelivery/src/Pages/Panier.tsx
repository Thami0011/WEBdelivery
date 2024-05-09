import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductTable from "../Components/ProductTable";
import MagicButton from "../Components/magicButton";

const Panier = () => {
  const navigate = useNavigate();

  const ajouterCommande = async () => {
    try {
      // Ensure the content type is set to 'application/json' and the username is properly formatted as JSON
      const username = sessionStorage.getItem("username");
      const total = localStorage.getItem("total");
      const response = await axios.post(
        "http://localhost:8085/commander",
        { username, total },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the response is successful before navigation
      if (response.status === 200) {
        navigate("/");
      } else {
        console.error("Failed to add order:", response.status);
        alert("Failed to process the order. Please try again.");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du plat au panier :", error);
      alert(
        "An error occurred while processing your order. Please check the console for more details."
      );
    }
  };

  return (
    <>
      <ProductTable />

      <MagicButton text="Valider votre commande" onClick={ajouterCommande} />
    </>
  );
};

export default Panier;
