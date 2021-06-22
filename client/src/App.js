import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs.js";
import Home from "./pages/Home/Home.js";
import Signin from "./pages/Signin/Signin.js";
import Developer from "./pages/Developer/Developer.js";

function App() {
    return (
        <>
            <Router>
                <h1 id="navTitle">Project Enlistment <NavTabs></NavTabs></h1>

                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/developer" component={Developer} />

                <div id="footer">
                    <NavTabs></NavTabs>
                </div>
            </Router>
        </>
    )
}

export default App;