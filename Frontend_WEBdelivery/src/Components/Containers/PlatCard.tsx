import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonBase } from '@mui/material';

interface PlatCardProps {
  name: string;
  description: string;
  price: number; 
  image: string;
}

const PlatCard: React.FC<PlatCardProps> = ({ name, description, price, image }) => {
  const ShoppingCart01Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
      <path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button><ShoppingCart01Icon/></Button>
        <Typography>{price}</Typography>
      </CardActions>
    </Card>
  );
}

export default PlatCard;