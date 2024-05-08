import React from "react";
import "./cards.css";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  image: string;
  description: string;
}

const Card: React.FC<Props> = ({ name, image, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Plat" + "?menu=" + name);
    localStorage.setItem("menu", name);
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-body">{description}</p>
        <button className="button" onClick={handleClick}>
          Voir Plus...
        </button>
      </div>
    </div>
  );
};

export default Card;
