import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    const linkStyles = {
        // textAlign: "center",
        // display: "inline-block",
        width: "75px",
        padding: "12px",
        margin: "0 80px 6px",
        background: "transparent",
        textDecoration: "none",
        color: "white",
      };

  return (
    <header id= "header">
      {/* <span className="logo">{"//"}</span> */}
      <span className="logo">
          {"//"}
        <span className="logotitle">The Flat Chat</span>
      </span>
      <NavLink to= "/" style={linkStyles}>|Home|</NavLink>
      <NavLink to= "/chat" style={linkStyles}>|Chat|</NavLink>
      {/* <span className="logo">{"//"}</span> */}
      <NavLink className= "about" to= "/about" style={linkStyles}>|About|</NavLink>
      <NavLink to= "/contact" style={linkStyles}>|Contact|</NavLink>
      {/* <h1 className= "title">The Flat Chat</h1> */}
    </header>
  );
}

export default Header;