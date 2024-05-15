import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Commande {
  id: number;
  prixTotal: number;
}

const CommandeComponent = () => {
  const [Commande, setCommande] = useState<Commande[]>([]);

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    axios
      .post('http://localhost:8085/commandes', username)
      .then((response) => {
        setCommande(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, []);

  const livrerCommande = async (commandeId:number) =>{
    try {
      const username = sessionStorage.getItem("username");
      const response = await axios.post(
        "http://localhost:8085/confirmerCommande",
        { username, commandeId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the response is successful before navigation
      if (response.status === 200) {
        window.location.reload();
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
  }

  return (
    <div className="ml-5 mt-20 pt-20 w-full flex justify-center">
      <div className="max-w-screen-xl w-full overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-8 py-4">
                Id commande
              </th>
              <th scope="col" className="px-8 py-4">
                Prix
              </th>
              <th scope="col" className="px-8 py-4"></th>
              <th scope="col" className="px-8 py-4"></th>
            </tr>
          </thead>
          <tbody>
              <tr
                key={Commande.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td
                  style={{ margin: "20px" }}
                  className="px-8 py-6 font-semibold text-gray-900 dark:text-white"
                >
                  {Commande.id}
                </td>
                <td
                  style={{ margin: "20px" }}
                  className="px-8 py-6 font-semibold text-gray-900 dark:text-white"
                >
                  {Commande.prixTotal}
                </td>
                <td
                  style={{ margin: "20px" }}
                  className="px-8 py-6"
                >
                  <button
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={()=>livrerCommande(Commande.id)}
                  >
                    Commande livrée
                  </button>
                </td>
              </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommandeComponent;
