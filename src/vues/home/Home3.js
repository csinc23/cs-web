import React, { useEffect, useState } from "react";
import EcommHeader from "../../components/headers/EcommHeader";
import "./Home3.css";
// import IconButton from "@material-ui/core/IconButton";
// import SaveAltIcon from "@mui/icons-material/SaveAlt";
// import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import axios from "axios";

export default function Home3() {
  const [image, setImage] = useState();
  const [product, setProduct] = useState();
  const productId = "63b4944644291211a0672bd9";
  useEffect(() => {
    axios
      .get(`http://localhost:3330/api/product/one/${productId}`)
      .then((p) => {
        setProduct(p.data);
        axios
          .get(`http://localhost:4000/upload/one?id=${p.data.pictures[0]}`)
          .then((res) => {
            setImage(res.data.image.image);
          })
          .catch((err) => {
            console.log("Error : ", err);
          });
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }, []);
  return (
    <div>
      <EcommHeader />
      <div className="home3ImageContainer">
        <img
          src={require("../../assets/images/backgrounds/21.jpg")}
          className="home3Image"
        />
        <div className="home3ImageTexts">
          <text className="Home3ImageText1">Organic All Natural</text>
          <text className="Home3ImageText2">Organic All Natural</text>
          <div className="Home3ImageText3Container">
            <text className="Home3ImageText3">Organic All Natural</text>
          </div>
        </div>

        <div className="home3RBContainer">
          <img
            className="home3RBImg"
            src={require("../../assets/images/divs/RoundButtons.PNG")}
          />
        </div>
        <div className="home3ProductsSellsContainer">
          <div className="home3ProductsTitle">
            <text className="home3ProductsTitleText">Our Best Sells !</text>
          </div>
          <div className="home3ProductsCards">
            {product ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <ProductCard product={product} image={image} />
                <ProductCard product={product} image={image} />
                <ProductCard product={product} image={image} />
              </div>
            ) : null}
          </div>
          <div className="home3ViewMoreButton">
            <Button
              variant="contained"
              color="success"
              component={Link}
              to="/products"
            >
              View More
            </Button>
          </div>
        </div>
        <div className="home3CIContainer">
          <img
            className="home3CImg"
            src={require("../../assets/images/backgrounds/3.jpg")}
          />
          <div className="home3CTextContainer">
            <text className="home3CText">
              It's All About Chemical-Free Products
            </text>
            <div className="home3CBody">
              <div className="home3CBodyLeft"></div>
              <div className="home3CBodyRight">
                <div className="home3CBodyRightTop" />
                <div className="home3CBodyRightBottom">
                  <text className="home3CText2">
                    <i>
                      We make special products... We make special products... We
                      make special products... We make special products... We
                      make special products... We make special products... We
                      make special products... We make special products...
                    </i>
                  </text>
                </div>
              </div>
            </div>
            <div className="home3CButtonContainer">
              <div className="home3CButton">
                <text className="home3CButtonText">More About Us</text>
              </div>
            </div>
          </div>
        </div>
        <div className="home3ProductsContainer">
          <div className="home3ProductsTitle">
            <text className="home3ProductsTitleText">
              Our latest products !
            </text>
          </div>
          <div className="home3ProductsCards">
            {product ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <ProductCard product={product} image={image} />
                <ProductCard product={product} image={image} />
                <ProductCard product={product} image={image} />
              </div>
            ) : null}
          </div>
          <div className="home3ViewMoreButton">
            <Button
              variant="contained"
              color="success"
              component={Link}
              to="/products"
            >
              View More
            </Button>
          </div>
        </div>

        <div className="home3BottomImageContainer">
          <img
            className="home3BottomImg"
            src={require("../../assets/images/backgrounds/essentialOils.jpg")}
          />
          <div className="home3BottomTexts">
            <text className="home3BottomH1">made with essential oils</text>
            <text className="home3BottomH2">
              Luxury Products Delivered within 24H - 48h
            </text>
            <text className="home3BottomH3">
              unique products with unique discounts
            </text>
          </div>
        </div>
        <div className="home3FooterContainer">
          <div className="home3Footer">
            <div className="home3FooterUpper">
              <div className="home3FooterUpperLeft">
                <img
                  className="home3FooterUpperLeftImage"
                  src={require("../../assets/images/sfw.png")}
                />
              </div>
              <div className="home3FooterUpperLinks">
                <div className="home3FooterUpperLinksRow">
                  <div className="home3FooterLink">
                    <text className="home3FooterLinksText">Home</text>
                  </div>
                  <div className="home3FooterLink">
                    <text className="home3FooterLinksText">About</text>
                  </div>
                  <div className="home3FooterLink">
                    <text className="home3FooterLinksText">FAQ</text>
                  </div>
                </div>
                <div className="home3FooterUpperLinksRow">
                  <div className="home3FooterLink">
                    <text className="home3FooterLinksText">Sign Up</text>
                  </div>
                  <div className="home3FooterLink">
                    <text className="home3FooterLinksText">Log In</text>
                  </div>
                  <div className="home3FooterLink">
                    <text className="home3FooterLinksText">Cart</text>
                  </div>
                </div>
                <div className="home3FooterUpperLinksRow">
                  <div className="home3FooterLink">
                    <text className="home3FooterLinksText">Blog</text>
                  </div>
                  <div className="home3FooterLink">
                    <text className="home3FooterLinksText">Contact Us</text>
                  </div>
                </div>
              </div>
              <div className="home3FooterUpperIcons">
                <div className="home3FooterIcon">
                  <FacebookIcon />
                </div>
                <div className="home3FooterIcon">
                  <TwitterIcon />
                </div>
                <div className="home3FooterIcon">
                  <GoogleIcon />
                </div>
                <div className="home3FooterIcon">
                  <InstagramIcon />
                </div>
              </div>
            </div>
            <div className="home3FooterBottom">
              <text className="home3FooterBottomText">
                Copyright 2023, Houssame Inc.
              </text>
            </div>
          </div>
        </div>
        <div style={{ height: "10vh" }}></div>
      </div>
    </div>
  );
}

function ProductCard({ product, image }) {
  return (
    <div className="home3ProductCard">
      <div className="home3ProductCardImageC">
        <img src={image} className="home3ProductCardImage" />
      </div>
      <div className="home3ProductBottom">
        <div className="home3ProductBottomLeft">
          <div className="home3ProductPrice">
            <text className="home3ProductPriceBefore">
              <strike>{product.oldPrice} dh</strike>
            </text>
            <text className="home3ProductPriceAfter">{product.price} dh</text>
          </div>
        </div>
        <div className="home3ProductBottomRight">
          {/* <IconButton color="primary" alt="Save">
            <SaveAltIcon fontSize="small" />
          </IconButton>
          <IconButton color="primary">
            <DownloadIcon fontSize="small" />
          </IconButton>
           */}
          <Button
            component={Link}
            to={{
              pathname: "/productDetail",
              search: product._id,
            }}
            variant="contained"
            color="success"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}
