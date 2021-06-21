import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';

function NavTabs() {
    return (
      <div className="nav">
          <Link to="/"><button id="nav1">Home</button></Link>
          <Link to="/profile"><button id="nav2">Profile</button></Link>
          <Link to="/signin"><button id="nav3">Sign In / Sign Up</button></Link>
      </div>
    )
}

export default NavTabs;