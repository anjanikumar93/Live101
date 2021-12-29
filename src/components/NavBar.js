import React from "react";
import "./NavBar.css";
import Logo from "./img/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="log_background">
        <div>
          <Link to="/">
            <img className="logo" src={Logo} alt="live-logo" />
          </Link>
        </div>
        <div style={{ marginLeft: 20, marginRight: 20 }}>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "1.5em",
              color: "#1de9b6",
            }}
            to="/"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "1.5em",
              color: "#1de9b6",
            }}
            to="/about"
          >
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
