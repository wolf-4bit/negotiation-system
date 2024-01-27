// ProductPage.jsx
import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import productImage from "./assets/productImage.jpg";
import Navbar from "./HomepageComponents/appbar";
import AdditionalBar from "./HomepageComponents/additionalBar";

const ProductPage = () => {
  const stars = 4;
  const reviews = [
    { id: 1, user: "User1", comment: "Great product!", rating: 5 },
    { id: 2, user: "User2", comment: "Good quality shoes.", rating: 4 },
    { id: 3, user: "User3", comment: "Comfortable and stylish.", rating: 4 },
  ];

  return (
    <div>
      <Navbar />
      <AdditionalBar />
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Card>
            <img
              src={productImage}
              alt="Product"
              style={{ width: "100%", height: "auto" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{marginTop:"5vh"}}>
              <Typography variant="h4" gutterBottom>
                Adidas Men's Adispree 5.0 M Running Shoes
              </Typography>
              <br />
              <Typography variant="h5" color="textSecondary">
                Price: ₹2000
              </Typography>
              <div>
                {Array.from({ length: stars }).map((_, index) => (
                  <StarIcon key={index} color="primary" sx={{ marginTop: "1vh", color: "#663399" }} />
                ))}
              </div>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "2vh", backgroundColor: "#663399" }}
              >
                Add to Cart
              </Button>
              
              <Button
                variant="contained"
                style={{ marginLeft:"1vh",marginTop: "2vh", backgroundColor: "#cccccc", color: "#333333" }}
              >
                Negotiate
              </Button>

              <br />
              <br />
              <br />

              {/* Product Details */}
              <Typography variant="h5" style={{ marginTop: "20px" }}>
                Product Details
              </Typography>
              <hr />
              <br />
              <Typography variant="body1">
                <strong>Size:</strong> 9UK
                <br />
                <strong>Material:</strong> Ethylene Vinyl Acetate
                <br />
                <strong>Closure type:</strong> Lace-Up
                <br />
                <strong>Heel type:</strong> No Heel
                <br />
                <strong>Water resistance level:</strong> Not Water Resistant
                <br />
                <strong>Sole material:</strong> Rubber
                <br />
                <strong>Sole material:</strong> Running
                <br />
                <strong>Country of Origin: </strong>India
              </Typography>

              {/* Additional Information */}
              <Typography variant="h5" style={{ marginTop: "20px" }}>
                About this item
              </Typography>
              <hr />
              <Typography variant="body1">
                Synthetic And Mesh
                <hr />
                <br />
                <strong>Manufacturer:</strong> Adidas India Marketing Private
                Ltd, Adidas India Marketing Private Ltd. Office no.6, 2nd Floor,
                Sector-B, Pocket-7, Plot no-11, Vasant Kunj, New Delhi-110070
                <br />
                <strong>Packer:</strong> Adidas India Marketing Private Ltd.
                Office no.6, 2nd Floor, Sector-B, Pocket-7, Plot no-11, Vasant
                Kunj, New Delhi-110070
                <br />
                <strong>Item Weight:</strong> 950 g<br />
                <strong>Item Dimensions LxWxH:</strong> 33.5 x 21 x 13.5
                Centimeters
                <br />
                <strong>Net Quantity:</strong> 1 Count
                <br />
                <strong>Generic Name:</strong> Sneaker
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">Customer Reviews</Typography>
              {reviews.map((review) => (
                <div key={review.id} style={{ margin: "10px 0" }}>
                  <Typography variant="subtitle1">{review.user}</Typography>
                  <Typography variant="body1">{review.comment}</Typography>
                  <div>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <StarIcon key={index} color="primary" sx={{ color: "#663399" }} />
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
