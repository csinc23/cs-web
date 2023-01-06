import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Login from "./vues/login/Login";
import Register from "./vues/register/Register";
import { connect } from "react-redux";
import Home3 from "./vues/home/Home3";
import AddProduct from "./vues/adminSpace/productsManagement/addProduct/AddProduct";
import ProductDetail from "./vues/products/ProductDetail";
import ProductsList from "./vues/products/ProductsList";

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    categories: state.categoryReducer.categories,
  };
};

function App(props) {
  // const { user } = useContext(AuthContext);
  const dispatch = props?.dipatch;
  const user = props?.user;
  const storageUser = localStorage?.getItem("user");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) !== null) {
      const action = {
        type: "SIGN_IN",
        value: { user: JSON.parse(localStorage.getItem("user")) || null },
      };
      dispatch(action);
    }
  }, [storageUser, dispatch]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home3 />}></Route>
        <Route path="/login" element={!user ? <Login /> : <Home3 />}></Route>
        <Route
          path="/register"
          element={!user ? <Register /> : <Home3 />}
        ></Route>
        <Route path="/productDetail" element={<ProductDetail />}></Route>
        <Route path="/productsList" element={<ProductsList />}></Route>
        <Route path="/home" element={<Home3 />} />
        <Route
          path="/product/add"
          element={
            !user ? (
              <Home3 />
            ) : user.role === "SELLER" || user.role === "ADMIN" ? (
              <AddProduct />
            ) : (
              <Home3 />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default connect(mapStateToProps)(App);
