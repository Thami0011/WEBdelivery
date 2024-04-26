import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface MultiActionAreaCardProps {
  title: string;
  description: string;
  image: string;
}

const MultiActionAreaCard: React.FC<MultiActionAreaCardProps> = ({
  title,
  description,
  image,
}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{
      navigate("/Plat" + "?menu=" + title)
      localStorage.setItem("menu", title)
    }
      } >
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
};

MultiActionAreaCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MultiActionAreaCard;
