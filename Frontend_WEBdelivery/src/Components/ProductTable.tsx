import { useState, useEffect } from "react";
import axios from "axios";

interface Plat {
  nom: string;
  description: string;
  prix: number;
  photo: string;
  id: number;
}

const ProductTable: React.FC = () => {
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

  const fetchCartItems = () => {
    ajouteruserAuPanier();
    axios
      .get<Plat[]>(`http://localhost:8085/Panier`)
      .then((response) => {
        setTableRow(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const [tablerow, setTableRow] = useState<Plat[]>([]);

  const supprimerPanier = async (id: number) => {
    try {
      await axios.post(
        "http://localhost:8085/supprimerPanier",
        id,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Remove the item from the state
      setTableRow((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-20 pt-20 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-20 py-3">
              Nom du Plat
            </th>
            <th scope="col" className="px-20 py-3">
              Quantite
            </th>
            <th scope="col" className="px-20 py-3">
              Prix
            </th>
            <th scope="col" className="px-20 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {tablerow.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="p-4">
                <img
                  src={"src/assets/images/" + item.photo}
                  className="w-16 md:w-32 max-w-full max-h-full"
                  alt="Product"
                />
              </td>
              <td className="px-20 py-4 font-semibold text-gray-900 dark:text-white">
                {item.nom}
              </td>
              <td className="px-20 py-4">
                <div className="flex items-center">
                  <div>
                    <input
                      type="number"
                      id="first_product"
                      className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1"
                      required
                    />
                  </div>
                </div>
              </td>
              <td className="px-20 py-4 font-semibold text-gray-900 dark:text-white">
                ${item.prix}
              </td>
              <td className="px-20 py-4">
                <button
                  onClick={() => {
                    supprimerPanier(item.id);
                  }}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
