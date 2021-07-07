import React, {useState, useContext} from "react";
import "./Signin.css";
import API from "../../utils/API";
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import Axios from "axios";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import UserContext from "../../utils/UserContext";



function App() {
    
    //sign up
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerFirstName, setRegisterFirstName] = useState("");
    const [registerLastName, setRegisterLastName] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerGithub, setRegisterGithub] = useState("");
    const [registerLinkedin, setRegisterLinkedin] = useState("");
    const [registerSkills, setRegisterSkills] = useState([]);

    // sign in
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);  
    const history = useHistory();
    const {setUser} = useContext(UserContext);


const register = () => {
    Axios({
      method: "POST",
      data: {
        email: registerEmail,
        password: registerPassword,
        firstName: registerFirstName,
        lastName: registerLastName,
        username: registerUsername,
        github: registerGithub,
        linkedin: registerLinkedin,
        skills: registerSkills

      },
      withCredentials: true,
      url: "api/users/signup",
    }).then((res) => console.log(res));
  };
  
  
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/api/users/login",
    }).then((res) => {if (res.status === 200) { 
        setUser(res.data);
        return history.push("/")
  };
})
  }

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/api/users",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

return (
    <div className="App">
      <div>
        <br />
        <h1 className="register">Register</h1>
        <br />
        <div className="entryLabel">Email:</div>
        <div className="entry">
          <input
            placeholder="Enter Email"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </div>

        <div className="entryLabel">Password:</div>
        <div className="entry">
          <input
            placeholder="Enter Password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>

        <div className="entryLabel">First Name:</div>
        <div className="entry">
          <input
            placeholder="Enter First Name"
            onChange={(e) => setRegisterFirstName(e.target.value)}
          />
        </div>

        <div className="entryLabel">Last Name:</div>
        <div className="entry">
          <input
            placeholder="Enter Last Name"
            onChange={(e) => setRegisterLastName(e.target.value)}
          />
        </div>

        <div className="entryLabel">Username:</div>
        <div className="entry">
          <input
            placeholder="Enter Username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </div>

        <div className="entryLabel">GitHub Account:</div>
        <div className="entry">
          <input
            placeholder="Enter GitHub Account Link"
            onChange={(e) => setRegisterGithub(e.target.value)}
          />
        </div>

        <div className="entryLabel">LinkedIn Profile:</div>
        <div className="entry">
          <input
            placeholder="Enter LinkedIn Profile Link"
            onChange={(e) => setRegisterLinkedin(e.target.value)}
          />
        </div>

        <div className="entryLabel">LinkedIn Profile:</div>
        <div className="entry">
          <input
            placeholder="Skills"
            onChange={(e) => setRegisterSkills(e.target.value)}
          />
        </div>

        <button onClick={register}>Submit</button>
      </div>
      <br />
      <hr />
      <br />

      <div>
        <h1 className="login">Login</h1>
        <br />

        <div className="entryLabel">Username:</div>
        <div className="entry">
          <input
            placeholder="Enter Username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </div>

        <div className="entryLabel">Password:</div>
        <div className="entry">
        <input
          placeholder="Enter Password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        </div>

        <button onClick={login}>Submit</button>
      </div>
      <br />

    </div>
  );
}

export default App;
