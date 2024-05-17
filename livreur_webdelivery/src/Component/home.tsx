import React from 'react';
import backgroundImage from "../assets/livreur.jpg";
import Button from '@mui/material/Button';

const Home = () => {

    const redirectToPage = (pageUrl: string) => {
        window.location.href = pageUrl;
      };
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw", 
        height: "100vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        filter: "opacity(0.6)",
      }} >

      <div
        style={{
          position: "absolute", 
          marginBottom:"90px",
          marginLeft:"550px",
          color: "Black", 
        }}
      >
         <h1 className='text-4xl font-extrabold'>Bienvenue, livreurs!</h1>
         <h2 className='text-xl'>Préparez-vous à fournir un service de livraison exceptionnel à nos clients.  Merci pour votre dévouement et votre engagement envers notre entreprise.</h2>
         <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="contained"  sx={{ bgcolor: 'purple' }} onClick={() => redirectToPage("/login")}>
              Sign in
            </Button>
            <Button variant="contained" sx={{ bgcolor: 'purple' }} onClick={() => redirectToPage("/register")}>
              Create Account
            </Button>
          </div>
      </div>
    </div>
  )
}

export default Home;
