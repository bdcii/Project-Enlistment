import React, {Component} from "react";
import "./Signin.css";
import API from "../../utils/API";
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';



export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        github: "",
        linkedin: "",
        skills: ""
    
    };
    }

    handleSignUp = (event) => {
        event.preventDefault();

            API.saveUser({ 
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                github: this.state.github,
                linkedin: this.state.linkedin,
                skills: this.state.skills   
            })
            .then(res => {
               if(res.status === 200)
               console.log("you have signed up!")
            })
            .catch(err => console.log(err))
        
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value
        })
    };


    render(){
    return( 
        <>
            <Container>
            <CardColumns>
            <Row>
            <Card className="card" style={{ width: "18rem" }}>
            <form>
                <div className="container signup">
                <div className="form-group text-left">
                <div className="signupHeading">Login</div>
                <br />
                <label htmlFor="exampleInputEmail1">Email Address</label>
                <input type="email" 
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Email"
                />
                </div>
                <br />
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Enter Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter Password"
                    />
                </div>
                <div></div>
                <br />
                <div>
                <button 
                    type="submit" 
                    className="btn btn-primary register"
                >
                    Login
                </button>
                </div>
                <br />
                <br />
                </div>
            </form>
            </Card>
            </Row>
            </CardColumns>
            
            <CardColumns>
            <Row>
            <Card className="card" style={{ width: "24rem" }}>
            <form>
                <div className="container login">
                <div className="form-group text-left">
                <h2>Sign Up</h2>
                <label for="first-name">First Name:</label>
                <input type="text" 
                    onChange={this.handleInputChange}
                    className="form-control"   
                    placeholder="Enter First Name"
                    value={this.state.firstName}
                />
                <label for="first-name">Last Name:</label>
                <input type="text" 
                    onChange={this.handleInputChange}
                    className="form-control" 
                    id="last-name" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Last Name"
                    value={this.state.lastName}
                />
                <label for="email">Email:</label>
                <input type="text" 
                    onChange={this.handleInputChange}
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Email"
                    value={this.state.Email}
                />
                <label for="create-password">Create Password:</label>
                <input type="text" 
                    onChange={this.handleInputChange}
                    className="form-control" 
                    id="create-password" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Password"
                    value={this.state.password}
                />
                <label for="confirm-password">Confirm Password:</label>
                <input type="text" 
                    onChange={this.handleInputChange}
                    className="form-control" 
                    id="confirm-password" 
                    aria-describedby="emailHelp" 
                    placeholder="Confirm Password"
                    value={this.state.password}
                />
                <label for="github">Github:</label>
                <input type="text" 
                    onChange={this.handleInputChange}
                    className="form-control" 
                    id="github" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Github Username"
                    value={this.state.github}
                />
                <label for="LinkedIn">LinkedIn:</label>
                <input type="text" 
                    onChange={this.handleInputChange}
                    className="form-control" 
                    id="LinkedIn" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter LinkedIn Username"
                    value={this.state.linkedin}
                />
                <label for="skills">skills:</label>
                <input type="text" 
                    onChange={this.handleInputChange}
                    className="form-control" 
                    id="skills" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Skills"
                    value={this.state.skills}
                />
                </div>
                
                <div>
                <button 
                    type="submit" 
                    className="btn btn-primary register"
                    onClick={this.handleSignUp}
                >
                    Register
                </button>
                </div>
                </div>
            </form>
            </Card>
            </Row>
            </CardColumns>
            </Container>
    </>
)}
}      
    