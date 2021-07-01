import React from "react";
import "./Signin.css";


function Signin() {
    return( 
        <>
            <form>
                <div className="container">
                <div className="form-group text-left">
                <h2>Sign Up</h2>
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

            <hr />
            
            <form>
                <div className="container">
                <div className="form-group text-left">
                <h2>Login</h2>
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
                <br />
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                <br />
                <br />
                </div>
                <br />
                <div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Login
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