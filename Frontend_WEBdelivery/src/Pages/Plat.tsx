import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Component from "../Components/platCard2";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

interface Plat {
  nom: string;
  description: string;
  prix: number;
  photo: string;
  id: number;
}

interface MenuSelection {
  category: string;
}

const Plat = () => {
  const [menuItems, setMenuItems] = useState<Plat[]>([]);
  const [menuSelection, setMenuSelection] = useState<MenuSelection>({
    category: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false); // état du Snackbar
  const username = sessionStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<Plat[]>(
        `http://localhost:8085/Plat?menu=${localStorage.getItem("menu")}`
      )
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, [menuSelection]);

  const ajouterAuPanier = async (platId: number) => {
    try {
      await axios.post("http://localhost:8085/AddPlat", { platId, username });
      setOpenSnackbar(true); // Ouvre le Snackbar après l'ajout au panier
    } catch (error) {
      console.error("Erreur lors de l'ajout du plat au panier :", error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Ferme le Snackbar
  };

  return (
    <Box sx={{ maxWidth: "80%", margin: "auto", paddingTop: "10rem" }}>
      <Grid container spacing={3}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Component
              name={item.nom}
              image={item.photo}
              prix={item.prix}
              id={item.id}
              onClick={() => {
                if (username) {
                  ajouterAuPanier(item.id);
                } else {
                  navigate("/login");
                }
              }}
            />
          </Grid>
        ))}
      </Grid>
      {/* Snackbar pour afficher le message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} // Durée d'affichage du Snackbar
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success" // Vous pouvez changer la couleur ici
          sx={{ width: "100%" }}
        >
          Plat ajouté au panier avec succès !
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default Plat;
