import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';

function NavTabs() {
    return (
      <div className="nav">
          <Link to="/"><button id="nav1">Home</button></Link>
          <Link to="/signin"><button id="nav2">Login</button></Link>
          <Link to="/profile"><button id="nav3">Profile</button></Link>
          <Link to="/projectform"><button id="nav4">Project</button></Link>
      </div>
    )
}

export default NavTabs;