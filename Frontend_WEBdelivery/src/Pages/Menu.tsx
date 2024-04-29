import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Cards from "../Components/animatedCards/Cards";

interface Menu {
  id: number;
  nom: string;
  description: string;
  photo: string;
}

function Menu() {
  const [menuItems, setMenuItems] = useState<Menu[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<Menu[]>("http://localhost:8085/Menu")
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);

  return (
    <Box sx={{ maxWidth: "80%", marginLeft: "23vh", paddingTop: "10rem" }}>
      <Grid container spacing={9}>
        {menuItems.map((item) => (
          <Grid item xs={12} md={4} key={item.id}>
            <Cards name={item.nom}
            description={item.description}
            image={"src/assets/images/"+item.photo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Menu;
