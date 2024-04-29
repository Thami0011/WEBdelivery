import { useState, useEffect } from 'react'
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import  Component from '../Components/platCard2';

interface Plat 
{
  nom: string;
  description: string;
  prix: number; 
  photo: string;
  id:number;
}

interface MenuSelection
 {
  category: string;
}

const Plat = () =>
   {
  const [menuItems, setMenuItems] = useState<Plat[]>([]);
  const [menuSelection, setMenuSelection] = useState<MenuSelection>({ category: "" });
  const navigate = useNavigate();

  useEffect(() => 
    {
        axios.get<Plat[]>(`http://localhost:8085/Plat?menu=${localStorage.getItem("menu")}`)
        .then((response) =>
           {
            setMenuItems(response.data);
           })
        .catch((error) =>
           {
          console.error("Error fetching menu items:", error);
        });
    
  }, [menuSelection]);

  const ajouterAuPanier = async (platId: number) => {
    const username = sessionStorage.getItem("username") || "";
    try {
       // Récupérer le nom d'utilisateur depuis sessionStorage
      await axios.post(
        "http://localhost:8085/AddPanier",
        { platId, username }, // Envoyer les données dans un objet
        {
          headers: {
            'Content-Type': 'application/json' // En-tête spécifiant le type de contenu
          }
        }
      );
      console.log("Plat ajouté au panier avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'ajout du plat au panier :", error);
      console.log({platId,username});
    }
  };
  
  return (
    <Box sx={{ maxWidth: "80%", margin: "auto", paddingTop: "10rem" }}>
      <Grid container spacing={3}>
        {menuItems.map((item) => 
        (
          
          <Grid item xs={12} sm={6} md={4} key={item.id}>
           <Component
           name={item.nom}
           image={item.photo}
           prix={item.prix}
           id={item.id}
           onClick={() => {
            ajouterAuPanier(item.id);
          }}
           />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Plat