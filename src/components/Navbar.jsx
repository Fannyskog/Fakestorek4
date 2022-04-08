import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-nav">
      
      <p className="header">Random stuff</p>
      <div className="nav-bar">
        <span className="links">
        <Link className="links" to="/Home">Home</Link>
        <Link className="links" to="/Products">Clothes</Link>
        <Link className="links" to="/Cart">Cart</Link>
        
        <Link className="links" to="/Login">Login</Link>
        <p className="links">💗</p>
        </span>
      
      </div> 
    </div>
   
  );
}

export default Navbar;