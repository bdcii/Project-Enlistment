import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs.js";
import Home from "./pages/Home/Home.js";

function App() {
    return (
        <>
            <Router>
                <h1>Project Enlistment <NavTabs></NavTabs></h1>



                <Route exact path="/" component={Home} />

            </Router>
        </>
    )
}

export default App;