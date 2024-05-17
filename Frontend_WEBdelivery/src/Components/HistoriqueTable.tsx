import React, { useState, useEffect } from "react";
import axios from "axios";

interface Commande {
  id: number;
  prixTotal: number;
  plats:[];
}

const HistoriqueTable: React.FC = () => {
  const [tablerow, setTableRow] = useState<Commande[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = sessionStorage.getItem("username");

  useEffect(() => {
    setLoading(true);

    axios
      .post<Commande[]>(`http://localhost:8085/Historique`, username)
      .then((response) => {
        setTableRow(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Erreur lors du chargement des données");
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite : {error}</div>;
  }

  return (
    <div className="mt-20 pt-20 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-20 py-3">
              Plats
            </th>
            <th scope="col" className="px-20 py-3">
              Prix
            </th>
          </tr>
        </thead>
        <tbody>
          {tablerow.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-20 py-4 font-semibold text-gray-900 dark:text-white">
                {item.plats.map((pl) => (
                  <div color="black">{pl}</div>
                ))}
              </td>

              <td className="px-20 py-4 font-semibold text-gray-900 dark:text-white">
                {item.prixTotal}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoriqueTable;
