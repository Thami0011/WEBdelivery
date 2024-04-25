import React, { useState, useEffect } from "react";
import axios from "axios";
import MultiActionAreaCard from "../Components/MultiActionAreaCard";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

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
    <Box sx={{ maxWidth: "80%", margin: "auto", paddingTop: "10rem" }}>
      <Grid container spacing={3}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MultiActionAreaCard
              title={item.nom}
              description={item.description}
              image={"src/assets/" + item.photo}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Menu;
