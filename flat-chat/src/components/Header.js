import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    const linkStyles = {
        textAlign: "center",
        display: "inline-block",
        width: "75px",
        padding: "12px",
        margin: "0 100px 6px",
        background: "black",
        textDecoration: "none",
        color: "white",
      };

  return (
    <header>
    <NavLink className= "about" to= "/about" style={linkStyles}>About </NavLink>
    <NavLink to= "/" style={linkStyles}>Home</NavLink>
    <span className="logo">{"//"}</span>
    <NavLink to= "/chat" style={linkStyles}>Chat</NavLink>
    <NavLink to= "/contact" style={linkStyles}>Contact</NavLink>
    <h1 className= "title">
        The Flat Chat
      </h1>
    </header>
  );
}

export default Header;