import React from "react";
import "./Signin.css";


function Signin() {
    return( 
        <form>
            <div className="container">
            <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" 
                   className="form-control" 
                   id="email" 
                   aria-describedby="emailHelp" 
                   placeholder="Enter email"
            />
            
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Create Password</label>
                <input type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
            >
                Register
            </button>
            </div>
            <div className="Container">
            <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" 
                   className="form-control" 
                   id="email" 
                   aria-describedby="emailHelp" 
                   placeholder="Enter email"
            />
            
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Create Password</label>
                <input type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    placeholder="Confirm Password"
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
            >
                Login
            </button>
            </div>
        </form>
)



}      
    
      
    
    
export default Signin;