import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { api, media } from "../../global";
import MainFooter from "../../components/footers/MainFooter";
import EcommHeader from "../../components/headers/EcommHeader";
import "./productsList.css";

export default function ProductsList() {
  // const [products, setProducts] = useState();
  const [resultsRender, setResultsRender] = useState([]);
  useState(() => {
    axios
      .get(`${api}/api/product/all`)
      .then((response) => {
        for (var i = 0; i < response.data.length; i += 3) {
          setResultsRender([
            ...resultsRender,
            <div style={{ flexDirection: "row", marginBottom: "4vh" }} key={i}>
              {response.data.slice(i, i + 3).map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>,
          ]);
        }
        // setProducts(response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, []);
  return (
    <div className="productsListContainer">
      <EcommHeader />
      <div className="productsListHeaderText">
        <text className="productsListHeaderTextTitle">Sentez la beauté</text>
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
  // const [image, setImage] = useState("x");

  // const arrayBufferToBase64 = async (buffer) => {
  //   var binary = "";
  //   var bytes = [].slice.call(new Uint8Array(buffer));
  //   await bytes.forEach((b) => (binary += String.fromCharCode(b)));
  //   return window.btoa(binary);
  // };

  // async function stream2buffer(stream) {
  //   console.log(stream);
  //   return await new Promise((resolve, reject) => {
  //     const _buf = [];

  //     stream.on("data", (chunk) => _buf.push(chunk));
  //     stream.on("end", () => resolve(Buffer.concat(_buf)));
  //     stream.on("error", (err) => reject(err));
  //   });
  // }

  // useEffect(() => {
  //   // setImage(`${media}/files/${product.pictures[0]}`);
  //   // console.log(image);
  //   // fetch(`${media}/files/${product.pictures[0]}`)
  //   //   .then((res) => res.json())
  //   //   .then(async (data) => {
  //   //     console.log(data);
  //   //     var base64Flag = "data:image/png;base64,";
  //   //     // var buf = await stream2buffer(data.body);
  //   //     var imageStr = await arrayBufferToBase64(data.data);
  //   //     setImage({
  //   //       img: base64Flag + imageStr,
  //   //     });
  //   //     console.log(image);
  //   //   });
  // }, []);

  return (
    <div className="home3ProductCard">
      <div className="home3ProductCardImageC">
        <img
          src={`${media}/files/${product.pictures[0]}`}
          className="home3ProductCardImage"
          alt="img"
        />
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
