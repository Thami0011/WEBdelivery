import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Component from "../Components/platCard2";

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

  const ajouterIdAuPanier = async (platId: number) => {
    try {
      await axios.post("http://localhost:8085/AddidPanier", platId, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Plat ajouté au panier avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'ajout du plat au panier :", error);
      console.log({ platId });
    }
  };

  const ajouteruserAuPanier = async () => {
    try {
      await axios.post(
        "http://localhost:8085/AdduserPanier",
        sessionStorage.getItem("username"),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("User ajouté au panier avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'ajout du plat au panier :", error);
    }
  };

  const ajouterAuPanier = async () => {
    try {
      await axios.post("http://localhost:8085/ajouterPanier");
    } catch (error) {
      console.error("Erreur lors de l'ajout du plat au panier :", error);
    }
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
                const username = sessionStorage.getItem("username");
                if (username) {
                  ajouterIdAuPanier(item.id);
                  ajouteruserAuPanier();
                  setTimeout(() => {
                    ajouterAuPanier();
                  }, 1000);
                } else {
                  navigate("/login");
                }
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Plat;
