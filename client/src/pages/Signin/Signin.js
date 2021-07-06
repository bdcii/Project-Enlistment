import React, {useState} from "react";
import "./Signin.css";
import API from "../../utils/API";
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import Axios from "axios";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";



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
        <h1>Register</h1>
        <input
          placeholder="Email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <input
          placeholder="First Name"
          onChange={(e) => setRegisterFirstName(e.target.value)}
        />
        <input
          placeholder="Last Name"
          onChange={(e) => setRegisterLastName(e.target.value)}
        />
        <input
          placeholder="Username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="GitHub"
          onChange={(e) => setRegisterGithub(e.target.value)}
        />
        <input
          placeholder="LinkedIn"
          onChange={(e) => setRegisterLinkedin(e.target.value)}
        />
        <input
          placeholder="Skills"
          onChange={(e) => setRegisterSkills(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input
          placeholder="Username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>
      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>

    </div>
  );
}

export default App;














  // handleInputChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({ [name]: value
    //     });
    // };


    // handleSignUp = (event) => {
    //     event.preventDefault();
    //     console.log(this.state.firstName)
    //         API.saveUser({ 
    //             firstName: this.state.firstName,
    //             lastName: this.state.lastName,
    //             email: this.state.email,
    //             password: this.state.password,
    //             github: this.state.github,
    //             linkedin: this.state.linkedin,
    //             skills: this.state.skills   
    //         })
    //         .then(res => {
    //            if(res.status === 200)
    //            console.log("you have signed up!")
    //         })
    //         .catch(err => console.log(err))
    // };


    // render(){
//     return( 
//         <>
//             <Container>
//             <CardColumns>
//             <Row>
//             <Card className="card" style={{ width: "18rem" }}>
//             <form>
//                 <div className="container signup">
//                 <div className="form-group text-left">
//                 <div className="signupHeading">Login</div>
//                 <br />
//                 <label htmlFor="exampleInputEmail1">Email Address</label>
//                 <input type="email" 
//                     className="form-control" 
//                     id="email" 
//                     aria-describedby="emailHelp" 
//                     placeholder="Enter Email"
//                 />
//                 </div>
//                 <br />
//                 <div className="form-group text-left">
//                     <label htmlFor="exampleInputPassword1">Enter Password</label>
//                     <input type="password" 
//                         className="form-control" 
//                         id="password" 
//                         placeholder="Enter Password"
//                     />
//                 </div>
//                 <div></div>
//                 <br />
//                 <div>
//                 <button 
//                     type="submit" 
//                     className="btn btn-primary register"
//                 >
//                     Login
//                 </button>
//                 </div>
//                 <br />
//                 <br />
//                 </div>
//             </form>
//             </Card>
//             </Row>
//             </CardColumns> 
             
//             <CardColumns>
//             <Row>
//             <Card className="card" style={{ width: "24rem" }}>
//             <form>
//                 <div className="container login">
//                 <div className="form-group text-left">
//                 <h2>Sign Up</h2>

//                 <label htmlFor="firstName">First Name:</label>
//                 <input type="text"
//                     id="firstName" 
//                     onChange={this.handleInputChange}
//                     className="form-control"   
//                     placeholder="Enter First Name"
//                     defaultValue={this.state.firstName}
//                 />
//                 <label htmlFor="first-name">Last Name:</label>
//                 <input type="text" 
//                     onChange={this.handleInputChange}
//                     className="form-control" 
//                     id="last-name" 
//                     aria-describedby="emailHelp" 
//                     placeholder="Enter Last Name"

//                     defaultValue={this.state.lastName}
//                 />
//                 <label htmlFor="email">Email:</label>
//                 <input type="text" 
//                     onChange={this.handleInputChange}
//                     className="form-control" 
//                     id="email" 
//                     aria-describedby="emailHelp" 
//                     placeholder="Enter Email"

//                     defaultValue={this.state.email}
//                 />
//                 <label htmlFor="create-password">Create Password:</label>
//                 <input type="text" 
//                     onChange={this.handleInputChange}
//                     className="form-control" 
//                     id="create-password" 
//                     aria-describedby="emailHelp" 
//                     placeholder="Enter Password"

//                     defaultValue={this.state.password}
//                 />
//                 <label htmlFor="confirm-password">Confirm Password:</label>
//                 <input type="text" 
//                     onChange={this.handleInputChange}
//                     className="form-control" 
//                     id="confirm-password" 
//                     aria-describedby="emailHelp" 
//                     placeholder="Confirm Password"
//                     defaultValue={this.state.password}
//                 />
//                 <label htmlFor="github">Github:</label>
//                 <input type="text" 
//                     onChange={this.handleInputChange}
//                     className="form-control" 
//                     id="github" 
//                     aria-describedby="emailHelp" 
//                     placeholder="Enter Github Username"

//                     defaultValue={this.state.github}
//                 />
//                 <label htmlFor="LinkedIn">LinkedIn:</label>
//                 <input type="text" 
//                     onChange={this.handleInputChange}
//                     className="form-control" 
//                     id="LinkedIn" 
//                     aria-describedby="emailHelp" 
//                     placeholder="Enter LinkedIn Username"
//                     defaultValue={this.state.linkedin}
//                 />
//                 <label htmlFor="skills">skills:</label>
//                 <input type="text" 
//                     onChange={this.handleInputChange}
//                     className="form-control" 
//                     id="skills" 
//                     aria-describedby="emailHelp" 
//                     placeholder="Enter Skills"
//                     defaultValue={this.state.skills}
//                 />
//                 </div>
                
//                 <div>
//                 <button 
//                     type="submit" 
//                     className="btn btn-primary register"
//                     onClick={register}>
//                 >
//                     Register
//                 </button>
//                 </div>
//                 </div>
//             </form>
//             </Card>
//             </Row>
//             </CardColumns>
//             </Container>
//     </>
// )
// }