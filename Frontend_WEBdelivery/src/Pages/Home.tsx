import React from "react";
import { AuroraBackground } from "../Components/background";
import { TextGenerateEffect } from "../Components/Text";
import Carousel from "../Components/carousel";
import MagicButton from "../Components/magicButton"; 
"use client";
import 'tailwindcss/tailwind.css'

const Home = () => {
  return (
    <>
      <TextGenerateEffect className="m-10" words="Bienvenue sur WebDelivery, votre destination en ligne pour des livraisons rapides et des saveurs délicieuses ! 🚀🍔 " />
      <MagicButton /> 
    </>
  );
};

export default Home;
