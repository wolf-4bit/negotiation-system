import React from "react";
import { Grid } from "@mui/material";
import ItemCard from "./ItemCard";// Import the ItemCard component
import item1 from "../assets/item1.jpg";
import item2 from "../assets/item2.jpg";
import item3 from "../assets/item3.jpg";
import item4 from "../assets/item4.jpg";
import item5 from "../assets/item5.jpg";
import item6 from "../assets/item6.jpg";
import item7 from "../assets/item7.jpg";
import item8 from "../assets/item8.jpg";
import item9 from "../assets/item9.jpg";
import item10 from "../assets/item10.jpg";
import item11 from "../assets/item11.jpg";
import item12 from "../assets/item12.jpg";


const items = [
  { image: item1, title: "Shoes 1", price: "₹1200" },
  { image: item2, title: "Shoes 2", price: "₹550" },
  { image: item3, title: "Shoes 3", price: "₹1000" },
  { image: item4, title: "Shoes 4", price: "₹1600" },
  { image: item5, title: "Shoes 5", price: "₹360" },
  { image: item6, title: "Shoes 6", price: "₹210" },
  { image: item7, title: "Shoes 7", price: "₹300" },
  { image: item8, title: "Shoes 8", price: "₹100" },
  { image: item9, title: "Shoes 9", price: "₹235" },
  { image: item10, title: "Shoes 10", price: "₹3000" },
  { image: item11, title: "Shoes 11", price: "₹550" },
  { image: item12, title: "Shoes 12", price: "₹1100" },
];

function ItemCards() {
  return (
    <Grid container spacing={5} sx={{ padding: '40px', gap: 9 }}>
      {items.map((item, index) => (
        <ItemCard
          key={index}
          itemName={item.title}
          price={item.price}
          imageUrl={item.image}
        />
      ))}
    </Grid>
  );
}

export default ItemCards;
