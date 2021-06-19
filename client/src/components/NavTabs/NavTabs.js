import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';

function NavTabs() {
    return (
      <div className="nav">
        <navbar>
          <Link className="button" to="/"><button>Home</button></Link>
          <Link to="/work"><button>Profile</button></Link>
          <Link to="/work"><button>Sign In / Sign Up</button></Link>
        </navbar>
      </div>
    )
}

export default NavTabs;