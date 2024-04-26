import { useState, useEffect } from 'react'
import PlatCard from '../Components/Containers/PlatCard'
import axios from "axios";
import MultiActionAreaCard from "../Components/Containers/MultiActionAreaCard";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

interface Plat {
  name: string;
  description: string;
  price: number; 
  image: string;
  id:number;
}

interface MenuSelection {
  category: string;
}

const Plat = () => {
  const [menuItems, setMenuItems] = useState<Plat[]>([]);
  const [menuSelection, setMenuSelection] = useState<MenuSelection>({ category: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (menuSelection.category) {
      axios
        .get<Plat[]>(`http://localhost:8085/Plat?menu=${menuSelection.category}`)
        .then((response) => {
          setMenuItems(response.data);
        })
        .catch((error) => {
          console.error("Error fetching menu items:", error);
        });
    } else {
      axios.get<Plat[]>(`http://localhost:8085/Plat?menu=${localStorage.getItem("menu")}`)
        .then((response) => {
          setMenuItems(response.data);
        })
        .catch((error) => {
          console.error("Error fetching menu items:", error);
        });
    }
  }, [menuSelection]);

  return (
    <Box sx={{ maxWidth: "80%", margin: "auto", paddingTop: "10rem" }}>
      <Grid container spacing={3}>
        {menuItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <PlatCard
              name={item.nom}
              description={item.description}
              image={"src/assets/images/" + item.photo}
              price={item.prix}

            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Plat