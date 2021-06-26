import React, {useState} from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs.js";
import Home from "./pages/Home/Home.js";
import Signin from "./pages/Signin/Signin.js";
import Profile from "./pages/Profile/Profile.js";
// import Login from './components/Login/Login';
// import useToken from './components/App/useToken';
import Project from "./pages/Project/dashboard/Project"



function App() {
    // const {token, setToken} = useToken();

    // if(!token) {
    //     return <Login setToken={setToken} />
    //   }
    return (
        <>
            <Router>
                <h1 id="navTitle">Smart Project Recruiter <NavTabs></NavTabs></h1>

                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/projects/:id">
                    <Project />
                </Route>
                <Route exact path="/projectsform" component={ProjectForm} />

                <div id="footer">
                    <NavTabs></NavTabs>
                </div>
            </Router>
        </>
    )
}

export default App;