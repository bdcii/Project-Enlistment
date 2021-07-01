import React, {useState} from "react";
import "./Signin.css";
import API from "../../utils/API";




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
            <form>
                <div className="container">
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
                    Click to Register
                </button>
                </div>
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