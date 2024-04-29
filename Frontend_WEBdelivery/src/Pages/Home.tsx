import React from "react";
import { AuroraBackground } from "../Components/background";
import { TextGenerateEffect } from "../Components/Text";
import Carousel from "../Components/carousel";
import MagicButton from "../Components/magicButton"; 

const Home = () => {
  return (
    <AuroraBackground className="bg-light dark:bg-light">
      <Carousel />
      <TextGenerateEffect className="m-10" words="Bienvenue sur WebDelivery, votre destination en ligne pour des livraisons rapides et des saveurs délicieuses ! 🚀🍔 " />
      <MagicButton /> 
    </AuroraBackground>
  );
};

export default Home;
