import React, { Component } from "react";
import { Link, route} from "react-router-dom";
import BreweryPage from "../add/update/BreweryPage";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Brews Clues</h1>
      <div className="links">
        <a href="/">Home </a>
        <a
          href="/about"
          style={
            {
              // color: 'white',
              // backgroundColor: '#A76B09',
              // borderRadius: '8px'
            }
          }
        >
          About{" "}
        </a>
        {/* <Link to="/breweries">Breweries</Link> */}
        <a href="/register">Register </a>
        <a href="/login">Login </a>
        <a href="/contactus">Contact Us </a>
      </div>
    </nav>
  );
};

export default Navbar;
