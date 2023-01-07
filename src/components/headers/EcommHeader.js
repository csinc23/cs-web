import React from "react";
import "./EcommHeader.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    categories: state.categoryReducer.categories,
  };
};

function EcommHeader({ user, dispatch, categories }) {
  const history = useNavigate();

  const logoutAction = () => {
    const action = { type: "SIGN_OUT" };
    dispatch(action);
    localStorage.removeItem("user");
    history("/login");
  };
  return (
    <div className="headerContainer">
      <div className="topHeader">
        <div className="topHeaderLeft">
          <div
            onClick={() => {
              history("/home2");
            }}
          >
            <img
              className="logo"
              src={require("../../assets/images/logos/1.png")}
              alt=""
            />
          </div>

          {/* <text className="headerText">Themes Platform</text> */}
        </div>
        <div className="topHeaderRight">
          <Button color="success" component={Link} to="/home">
            Home
          </Button>
          <Button color="success" component={Link} to="/home">
            About
          </Button>
          <Button color="success" component={Link} to="/home">
            FAQ
          </Button>
          <Button color="success" component={Link} to="/home">
            Blog
          </Button>
          <Button color="success" component={Link} to="/productsList">
            Our products
          </Button>
          {user === null ? (
            <Button
              // color="success"
              component={Link}
              to="/login"
              style={{ marginRight: "6vw" }}
            >
              Sign In
            </Button>
          ) : (
            <form id="submit" noValidate onSubmit={logoutAction}>
              <Button
                color="error"
                style={{ marginRight: "6vw" }}
                type="submit"
              >
                LogOut
              </Button>
            </form>
          )}
        </div>
      </div>
      <div className="bottomHeader">
        {/* <Button
          component={Link}
          to="/home2"
          variant="outlined"
          style={{ marginBottom: "5px", marginRight: "0.5vw" }}
        >
          Themes
        </Button>
        <Button
          component={Link}
          to="/products/templates"
          variant="outlined"
          style={{ marginBottom: "5px", marginRight: "0.5vw" }}
        >
          Templates
        </Button>
        <Button
          component={Link}
          to="/products/code"
          variant="outlined"
          style={{ marginBottom: "5px", marginRight: "0.5vw" }}
        >
          Code
        </Button>
        <Button
          component={Link}
          to="/products/graphics"
          variant="outlined"
          style={{ marginBottom: "5px", marginRight: "0.5vw" }}
        >
          Graphics
        </Button>
        <Button
          component={Link}
          to="/products/files"
          variant="outlined"
          style={{ marginBottom: "5px", marginRight: "0.5vw" }}
        >
          Files
        </Button> */}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(EcommHeader);
