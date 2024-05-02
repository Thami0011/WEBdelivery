import React from "react";
import { TextGenerateEffect } from "../Components/Text";
import MagicButton from "../Components/magicButton";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";
import Carouselmoe from "../Components/Carouselmoe";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Menu");
  };

  return (
    <>
      <Carouselmoe>
        <TextGenerateEffect
          className="m-10"
          words="Bienvenue sur WebDelivery, votre destination en ligne pour des livraisons rapides et des saveurs délicieuses ! 🚀🍔 "
        />
        <img src="src/assets/images/beignets_pommes.png"></img>
      </Carouselmoe>
      <MagicButton text="Explorer notre menu" onClick={handleClick} />
    </>
  );
};

export default Home;
