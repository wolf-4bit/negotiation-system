import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const getRandomStars = () => {
  return Math.floor(Math.random() * 5) + 1;
};

const ItemCard = ({ itemName, price, imageUrl }) => {
  const stars = getRandomStars();

  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Card sx={{
        backgroundColor: "f5f5f4",
        borderRadius: "10px",
        width: "15vw",
        height: '30vh',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': { boxShadow: '0px 10px 8px rgba(0, 0, 0, 0.1)' }, // Adjust the boxShadow value
        objectFit: "contain",
        '@media (max-width: 800px)': {
          width: '50vw',
          marginBottom: '10px',
        },
      }}>
        <img src={imageUrl} alt={itemName} style={{ paddingTop: "10%", paddingLeft: '20%', width: '60%', height: 'auto' }} />
        <CardContent sx={{ flex: 1, position: 'relative', paddingLeft: '15px' }}>
          <div style={{ position: 'absolute', bottom: '8px', left: 0, right: 0, textAlign: 'center' }}>
            <Typography variant="h6">{itemName}</Typography>
            <Typography variant="body1">Price: {price}</Typography>
            <div>
              {Array.from({ length: stars }).map((_, index) => (
                <StarIcon key={index} color="primary" sx={{ color: "#663399" }} />
              ))}
            </div>
            <Button variant="contained" sx={{ backgroundColor: "#663399" }}>
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ItemCard;
