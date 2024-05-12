import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Commande {
  id: number;
  prixTotal: number;
}

const Commande = () => {
  const [tablerow, setTableRow] = useState<Commande[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:8085/commandes')
      .then((response) => {
        setTableRow(response.data);
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
      });
  }, [tablerow]);

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
            {tablerow.map((item, index) => (
              <tr
              
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td
                style={{margin:"20px"}} 
                className="px-8 py-6 font-semibold text-gray-900 dark:text-white">
                  {item.id}
                </td>
                <td
                style={{margin:"20px"}}  
                className="px-8 py-6 font-semibold text-gray-900 dark:text-white">
                  {item.prixTotal}
                </td>
                <td style={{margin:"20px"}} 
                className="px-8 py-6">
                  <button
                    onClick={() => {
                      supprimerPanier(item.id, index);
                    }}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Livrer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Commande;