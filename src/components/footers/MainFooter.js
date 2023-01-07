import React from "react";
import "./mainFooter.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";

export default function MainFooter() {
  const navigate = useNavigate();
  return (
    <div className="home3FooterContainer">
      <div className="home3Footer">
        <div className="home3FooterUpper">
          <div className="home3FooterUpperLeft">
            <img
              className="home3FooterUpperLeftImage"
              src={require("../../assets/images/logos/1.png")}
              alt="img"
            />
          </div>
          <div className="home3FooterUpperLinks">
            <div className="home3FooterUpperLinksRow">
              <div
                className="home3FooterLink"
                onClick={() => {
                  navigate("/home");
                }}
              >
                <text className="home3FooterLinksText">Home</text>
              </div>
              <div
                className="home3FooterLink"
                onClick={() => {
                  navigate("/about");
                }}
              >
                <text className="home3FooterLinksText">About</text>
              </div>
              <div
                className="home3FooterLink"
                onClick={() => {
                  navigate("/faq");
                }}
              >
                <text className="home3FooterLinksText">FAQ</text>
              </div>
            </div>

            <div className="home3FooterUpperLinksRow">
              <div
                className="home3FooterLink"
                onClick={() => {
                  navigate("/register");
                }}
              >
                <text className="home3FooterLinksText">Sign Up</text>
              </div>
              <div
                className="home3FooterLink"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <text className="home3FooterLinksText">Log In</text>
              </div>
              <div
                className="home3FooterLink"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <text className="home3FooterLinksText">Cart</text>
              </div>
            </div>
            <div className="home3FooterUpperLinksRow">
              <div
                className="home3FooterLink"
                onClick={() => {
                  navigate("/blog");
                }}
              >
                <text className="home3FooterLinksText">Blog</text>
              </div>
              <div
                className="home3FooterLink"
                onClick={() => {
                  navigate("/contacts");
                }}
              >
                <text className="home3FooterLinksText">Contact Us</text>
              </div>
            </div>
          </div>
          <div className="home3FooterUpperIcons">
            <div
              className="home3FooterIcon"
              onClick={() => {
                navigate("/home");
              }}
            >
              <FacebookIcon />
            </div>
            <div
              className="home3FooterIcon"
              onClick={() => {
                navigate("/home");
              }}
            >
              <TwitterIcon />
            </div>
            <div
              className="home3FooterIcon"
              onClick={() => {
                navigate("/home");
              }}
            >
              <GoogleIcon />
            </div>
            <div
              className="home3FooterIcon"
              onClick={() => {
                navigate("/home");
              }}
            >
              <InstagramIcon />
            </div>
          </div>
        </div>
        <div className="home3FooterBottom">
          <text className="home3FooterBottomText">
            Copyright 2023@ hyncos Inc.
          </text>
        </div>
      </div>
    </div>
  );
}
