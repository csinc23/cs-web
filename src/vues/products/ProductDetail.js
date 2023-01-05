import { Button, IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EcommHeader from "../../components/headers/EcommHeader";
import "./productDetail.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MainFooter from "../../components/footers/MainFooter";

export default function ProductDetail() {
  const { search } = useLocation();
  const [product, setProduct] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3330/api/product/one/${search.slice(1)}`)
      .then((p) => {
        console.log(p);
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
  }, [search]);

  return (
    <div>
      <EcommHeader />
      {product ? (
        <div className="productDetailContainer">
          <div className="productDetailData">
            <div className="productDetailDataLeft">
              <div className="productDetailImageContainer">
                <img className="productDetailImage" src={image} />
              </div>

              <div className="productDetailPrice">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <text className="productDetailName">{product.name}</text>
                  <text className="productDetailOldPrice">
                    <strike>{product.oldPrice} dh</strike>
                  </text>
                  <text className="productDetailPrice">{product.price} dh</text>
                </div>
                <div className="productDetailPriceIcon">
                  <IconButton color="success">
                    <ShoppingCartIcon fontSize="large" />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="productDetailRight">
              <div className="productDetailRightHeader">
                <Button variant="outlined" color="success">
                  Add to cart
                </Button>
                <Button variant="outlined" color="success">
                  Add to wish list
                </Button>
              </div>
              <div className="productDetailRightData">
                <text className="productDetailRightH1">-{">"} Details</text>
                <text className="productDetailRightInstructions">
                  <i>Instructions for use:</i>
                </text>
                {product.instructions ? (
                  <div>
                    {product.instructions.map((i) => (
                      <text>- {i}</text>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <MainFooter />
    </div>
  );
}
