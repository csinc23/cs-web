import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainFooter from "../../components/footers/MainFooter";
import EcommHeader from "../../components/headers/EcommHeader";
import "./productsList.css";

export default function ProductsList() {
  const [products, setProducts] = useState();
  const [resultsRender, setResultsRender] = useState([]);
  useState(() => {
    axios
      .get("http://localhost:3330/api/product/all")
      .then((response) => {
        for (var i = 0; i < response.data.length; i += 3) {
          setResultsRender([
            ...resultsRender,
            <div key={i}>
              {response.data.slice(i, i + 3).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>,
          ]);
        }
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);
  return (
    <div className="productsListContainer">
      <EcommHeader />
      <div className="productsListHeaderText">
        <text className="productsListHeaderTextTitle">Slogan</text>
        <text className="productsListHeaderTextDesc">
          Trouvez des produits qui vous conviennent le plus ! Et bien de nouvau
          produits ajoutés quotidienement pour être à la hauteur de vos
          attentes.
        </text>
      </div>
      <div className="productsListBody">
        <div className="productsListBodyHeader">
          <text className="productsListBodyTitle">Our products</text>
          <div className="productsListBodyFilter">
            <text className="productsListBodyFilterTitle">Filter</text>
          </div>
        </div>
        <div className="productsListCards">
          {/* {products && products !== null ? (
            <div>
              {products.map((p) => {
                return <ProductCard key={p._id} product={p} />;
              })}
            </div>
          ) : null} */}
          {resultsRender}
        </div>
      </div>
      <MainFooter />
      <div style={{ height: "10vh" }}></div>
    </div>
  );
}

function ProductCard({ product }) {
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/upload/one?id=${product.pictures[0]}`)
      .then((res) => {
        setImage(res.data.image.image);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  });

  return (
    <div className="home3ProductCard">
      <div className="home3ProductCardImageC">
        <img src={image} className="home3ProductCardImage" alt="img" />
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
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}
