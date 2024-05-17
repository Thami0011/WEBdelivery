import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';


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
    <>
    
    {/* <div className='flex flex-col gap-9 items-center justify-center h-screen  '>
<h1 className='text-6xl mt-20'>Bienvenue {sessionStorage.getItem("Prenom")} {sessionStorage.getItem("nom")}</h1>
    <Card className="w-[350px] h-[250px] ">
    <CardContent className='font-bold text-xl'>Voici votre commande disponible : {Commande.id}</CardContent>
    <CardDescription>Prix de la commande : {Commande.prixTotal}</CardDescription>
    <CardFooter className='float-right'>
      
      <Button variant='default' onClick={()=>livrerCommande}>Confirmer la livraison</Button>
    </CardFooter>
    </Card>
    </div> */}
    <div className='flex flex-col gap-9 items-center justify-center h-screen  '>
    <Card className="w-[350px] h-[170px]">
      <CardHeader>
        <CardTitle>Bienvenue {sessionStorage.getItem("Prenom")} {sessionStorage.getItem("nom")}</CardTitle>
        <CardDescription>Voici votre commande disponible : {Commande.id}</CardDescription>
      </CardHeader>
      <CardContent>
        <h2>Prix de la commande : {Commande.prixTotal} $</h2>
      </CardContent>
      <CardFooter className="flex justify-center ml-52">
        
        <Button  variant='default' onClick={()=>livrerCommande}>Confirmer la livraison</Button>
      </CardFooter>
    </Card>
    </div>
    
    
    </>
  );
};

export default CommandeComponent;
