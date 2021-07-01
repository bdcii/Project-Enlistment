import React from "react";
import "./Signin.css";
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';


function Signin() {
    return( 
        <>
            <Container>
            <CardColumns>
            <Row>
            <Card className="card" style={{ width: "18rem" }}>
            <form>
                <div className="container signup">
                <div className="form-group text-left">
                <div className="signUpHeading">Sign Up</div>
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
            <hr />
            
            <form>
                <div className="container login">
                <div className="form-group text-left">
                    <h2>Login</h2>
                    <div><label htmlFor="exampleInputEmail1">Email Address </label></div>
                        <div><input type="email" 
                            className="form-control" 
                            id="email" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter Email"
                        /></div>
                    <br />
                    </div>
                <br />
                <div className="form-group text-left">
                    <div><label htmlFor="exampleInputPassword1">Enter Password</label></div>
                    <div><input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Enter Password"
                    /></div>
                </div>
                <br />
                <br />
                <br />
                <div className="form-group text-left">
                    <div><label htmlFor="exampleInputPassword1">Confirm Password</label></div>
                    <div><input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    /></div>
                <br />
                <br />
                </div>
                <br />
                <br />
                <div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        >Login
                    </button>
                    <br />
                </div>
                <br />
                <br />
                </div>
            </form>
    </>
)
}      
    
export default Signin;