import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs.js";
import Home from "./pages/Home/Home.js";
import Signin from "./pages/Signin/Signin.js";
import Profile from "./pages/Profile/Profile.js";
// import Login from './components/Login/Login';
// import useToken from './components/App/useToken';
import Project from "./pages/Project/dashboard/Project";
import ProjectForm from "./pages/Project/newProject/ProjectForm";
import sprlogo from "./assets/sprlogo.png";
import ProjManager from "./pages/ProjManager/ProjManager"
import API from "./utils/API"
import UserContext from "./utils/UserContext"



function App() {
const [ user, setUser ] = useState(null);

    useEffect(() => {
    //   fetch currentuser
    API.getUser()
        .then(res => {
            setUser(res.data)
            console.log(res.data)
        } )
        .catch(err => console.log(err))  

    },[]);
  
        
    return (
        <>
         <UserContext.Provider value={{user, setUser}}>
            <Router>
                <div className="header">
                    <div className="logoTitleButtons">
                        <img src={sprlogo} alt="App logo" className="appLogo" id="appLogo" />
                        <h1 id="navTitle">Smart Project Recruiter</h1>
                    </div>
                    <NavTabs></NavTabs>
                </div>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/users/:id" component={ProjManager} />
                <Route exact path="/projects/:id"><Project />
                </Route>
                <Route exact path="/projectform" component={ProjectForm} />

                <div id="footer">
                    <NavTabs></NavTabs>
                </div>
            </Router>
            </UserContext.Provider>
        </>
    )
}

export default App;