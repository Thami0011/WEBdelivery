import React from "react";
import { TextGenerateEffect } from "../Components/Text";
import MagicButton from "../Components/magicButton"; 
import 'tailwindcss/tailwind.css';
import { useNavigate } from "react-router-dom";




const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Menu");
  };
  
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url('src/assets/your/image.jpg')"}}>
        <div className="w-full max-w-screen-xl">
          <div className="flex flex-col justify-center items-center">
            <TextGenerateEffect className="m-10" words="Bienvenue sur WebDelivery, votre destination en ligne pour des livraisons rapides et des saveurs délicieuses ! 🚀🍔 " />
            <MagicButton text="Explorer notre menu" onClick={handleClick} /> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
