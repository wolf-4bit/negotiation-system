import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import item1 from "../assets/item1.jpg";
import item2 from "../assets/item2.jpg";
import item3 from "../assets/item3.jpg";
import item4 from "../assets/item4.jpg";
import item5 from "../assets/item5.jpg";
import item6 from "../assets/item6.jpg";
import item7 from "../assets/item7.jpg"; // added
import item8 from "../assets/item8.jpg"; // added
import item9 from "../assets/item9.jpg"; // added
import item10 from "../assets/item10.jpg"; // added
import item11 from "../assets/item11.jpg"; // added
import item12 from "../assets/item12.jpg"; // added
import "./cards.css";

const items = [
  { image: item1, title: "Shoes", price: "₹1200" },
  { image: item2, title: "Watch", price: "₹550" },
  { image: item3, title: "Yonex Racket", price: "₹1000" },
  { image: item4, title: "Dual Racket", price: "₹1600" },
  { image: item5, title: "Football", price: "₹360" },
  { image: item6, title: "Deodorant", price: "₹210" },
  { image: item7, title: "Bagpack", price: "₹300" }, // adjust price accordingly
  { image: item8, title: "Wallet", price: "₹100" },
  { image: item9, title: "Extension Board", price: "₹235" },
  { image: item10, title: "Sneakers", price: "₹3000" },
  { image: item11, title: "Grey Shoes", price: "₹550" },
  { image: item12, title: "Running Shoes", price: "₹1100" },
];

function ItemCards() {
  return (
    <div className="item-cards-container">
      {items.map((item, index) => (
        <Card key={index} variant="standard" className="item-card">
          <img src={item.image} alt={item.title} className="item-image" />
          <CardContent className="item-content">
            <Typography className="typo1" variant="h6" component="div">
              {item.title}
            </Typography>
            <Typography className="typo2"variant="body2" color="textSecondary">
              {item.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ItemCards;
