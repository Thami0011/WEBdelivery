import React from "react";
import MagicButton from "../Components/magicButton";
import { useNavigate } from "react-router-dom";

const Aboutus: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Menu");
  };
  // Styles pour le conteneur principal
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "20px",
  };

  // Styles pour la section de l'image
  const imageStyle: React.CSSProperties = {
    flex: 1,
    padding: "20px",
  };

  // Styles pour l'image elle-même
  const imageInnerStyle: React.CSSProperties = {
    width: "auto",
    height: "auto",
    maxHeight: "400px", // Réglez la hauteur maximale de l'image
    marginLeft: "150px",
  };

  // Styles pour la section du texte
  const textStyle: React.CSSProperties = {
    flex: 1,
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <div style={imageStyle}>
        <img
          src="src/assets/aboutus2.png"
          alt="About Us"
          style={imageInnerStyle}
        />
        <MagicButton text="Explorer notre menu" onClick={handleClick} />
      </div>
      <div style={textStyle}>
        <i>
          <h2
            style={{
              fontWeight: "bolder",
              fontSize: "40px",
              margin: "20px",
              fontFamily: "Lato",
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: "999px",
            }}
          >
            Welcome to Our Food Delivery Service
          </h2>
        </i>
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          Bienvenue à notre service de livraison de repas ! Chez nous, nous
          sommes passionnés par la gastronomie et la satisfaction de nos
          clients. Notre équipe travaille sans relâche pour vous offrir une
          expérience culinaire exceptionnelle, directement dans le confort de
          votre foyer. Nous croyons en la fraîcheur et la qualité des
          ingrédients, c'est pourquoi nous sélectionnons soigneusement nos
          fournisseurs pour vous garantir des produits de premier choix. Que
          vous soyez à la recherche d'un repas léger et équilibré ou d'un festin
          gastronomique, notre menu diversifié saura satisfaire toutes vos
          envies. Avec notre service de livraison rapide et fiable, vous pouvez
          commander en toute confiance, sachant que votre repas sera préparé
          avec soin et livré à votre porte à temps. Nous sommes là pour rendre
          vos repas encore plus délicieux et pratiques, chaque jour.
          Rejoignez-nous dans cette aventure culinaire et découvrez un monde de
          saveurs exquises. Nous sommes impatients de vous servir et de vous
          faire vivre une expérience gastronomique inoubliable !
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
