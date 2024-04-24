import React, { useState, useEffect } from "react";
import axios from "axios";

interface Menu {
  id: number;
  nom: string;
  description: string;
  photo: string;
}

function Menu() {
  const [menuItems, setMenuItems] = useState<Menu[]>([]);

  useEffect(() => {
    // Fetch menu items from the server
    axios.get<Menu[]>("https://localhost:8085/menu")
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching menu items:", error);
      });
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {menuItems.map(item => (
        <div key={item.id}>
          <h2>{item.nom}</h2>
          <p>{item.description}</p>
          <img src={item.photo} alt={item.nom} />
        </div>
      ))}
    </div>
  );
}

export default Menu;