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
import { url } from 'inspector';


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
  const containerStyle: React.CSSProperties = 
  {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    
    
  };
  const imgStyle: React.CSSProperties = 
  {
    width:"55vw",
    height:"100vh",
    objectFit: "cover",
  margin: 0,
  padding: 0,
   
    

    
  };

  return (
    <>
    <div style={containerStyle}>
    <div className='flex flex-col gap-9 items-center justify-center h-screen  '>
    <Card className="w-[750px] h-[850px] bg-gray-300" >
      <CardHeader>
        <CardTitle style={{fontSize:"55px" ,marginTop: "150px"}}> Bienvenue, {sessionStorage.getItem("Prenom")} {sessionStorage.getItem("nom")}. </CardTitle>
        <CardDescription style={{fontSize:"27px",marginTop:"35px",color:"black", }}>Vous trouvez ici la commande à livrer :</CardDescription>
      </CardHeader>
      <CardContent>
            
            <h2 style={{ fontSize: "20px", marginTop: "65px" , fontFamily:"monospace" }}>
               Commande n° {Commande.id} est maintenant disponible.
            </h2>
            <h2 style={{ fontSize: "20px", marginTop: "15px" ,fontFamily:"monospace" }}>
              Montant total de la commande : {Commande.prixTotal} $.
            </h2>
            <h2 style={{ marginTop: "15px" , fontSize:"19px",fontFamily:"monospace" }}>
              Veuillez procéder à la livraison dans les plus brefs délais.
            </h2>
          </CardContent>
      <CardFooter className="flex justify-center ml-52">
        
        <Button style={{marginTop:"55px",marginRight:"230px"}}  variant='default' onClick={()=>livrerCommande(Commande.id)}>Confirmer la livraison</Button>
      </CardFooter>
    </Card>
    </div>
      <div style={{objectFit:"cover"  }} >
        <img style={imgStyle} src='src/assets/livliv.jpg' />
      </div>
    </div>





     {/* <div className='flex flex-col gap-9 items-center justify-center h-screen  '>
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
    </div>*/} 
   
    
    
    </>
  );
};

export default CommandeComponent;
