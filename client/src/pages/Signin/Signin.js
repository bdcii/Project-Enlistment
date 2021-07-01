import React, {useState} from "react";
import "./Signin.css";
import API from "../../utils/API";


import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';


function Signin() {
    
    const [formObject, setFormObject] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        github: "",
        linkedin: "",
        skills: ""
    
    })

    function handleSignUp(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.saveUser({ 
                firstName: formObject.firstName,
                lastName: formObject.lastName,
                email: formObject.email,
                password: formObject.password,
                github: formObject.github,
                linkedin: formObject.linkedin,
                skills: formObject.skills   
            })
            .then(() => setFormObject({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                github: "",
                linkedin: "",
                skills: "" 
            }))
            .catch(err => console.log(err))
        }
    };

    function handleInputChange(event) {
        const {name, value} = event.target;
        setFormObject({
        ...formObject, [name]: value
        })
    };













    return( 
        <>
            <Container>
            <CardColumns>
            <Row>
            <Card className="card" style={{ width: "18rem" }}>
            <form>
                <div className="container login">
                <div className="form-group text-left">
                <h2>Sign Up</h2>
                <label for="first-name">First Name:</label>
                <input type="first-name" 
                    onChange={handleInputChange}
                    className="form-control" 
                    id="first-name" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter First Name"
                    value={formObject.firstName}
                />
                <label for="first-name">Last Name:</label>
                <input type="last-name" 
                    onChange={handleInputChange}
                    className="form-control" 
                    id="last-name" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Last Name"
                    value={formObject.lastName}
                />
                <label for="email">email:</label>
                <input type="email" 
                    onChange={handleInputChange}
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Email"
                    value={formObject.Email}
                />
                <label for="create-password">Create Password:</label>
                <input type="create-password" 
                    onChange={handleInputChange}
                    className="form-control" 
                    id="create-password" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Password"
                    value={formObject.password}
                />
                <label for="confirm-password">Confirm Password:</label>
                <input type="confirm-password" 
                    onChange={handleInputChange}
                    className="form-control" 
                    id="confirm-password" 
                    aria-describedby="emailHelp" 
                    placeholder="confirm Password"
                    value={formObject.password}
                />
                <label for="github">Github:</label>
                <input type="github" 
                    onChange={handleInputChange}
                    className="form-control" 
                    id="github" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Github Username"
                    value={formObject.github}
                />
                <label for="LinkedIn">LinkedIn:</label>
                <input type="LinkedIn" 
                    onChange={handleInputChange}
                    className="form-control" 
                    id="LinkedIn" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter LinkedIn Username"
                    value={formObject.linkedin}
                />
                <label for="skills">skills:</label>
                <input type="skills" 
                    onChange={handleInputChange}
                    className="form-control" 
                    id="skills" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter Skills"
                    value={formObject.skills}
                />
                </div>
                
                <div>
                <button 
                    type="submit" 
                    className="btn btn-primary register"
                >

                </button>
                </div>
                </div>
            </form>
            </Card>
            </Row>
            </CardColumns>



            <CardColumns>
            <Row>
            <Card className="card" style={{ width: "18rem" }}>
            <form>
                <div className="container signup">
                <div className="form-group text-left">
                <div className="signupHeading">Sign Up: New User</div>
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
                    <label htmlFor="exampleInputPassword1">Create Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Create Password"
                    />
                </div>
                <div></div>
                <br />
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                    <br/>
                    <br/>
                </div>
                <div>
                <button 
                    type="submit" 
                    className="btn btn-primary register"
                >
                    Register
                </button>
                </div>
                <br />
                <br />
                </div>
            </form>
            </Card>
            </Row>
            </CardColumns>
            </Container>


    </>
)
}      
    
export default Signin;