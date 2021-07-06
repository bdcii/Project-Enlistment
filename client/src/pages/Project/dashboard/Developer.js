import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, TextArea, FormBtn } from "../../../components/Form";
import Axios from "axios";
import sendEmail from "../../../utils/nodemailer"



function Developer() {
    const [formObject, setFormObject] = useState({})

    //states for nodemailer
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

   

    function handleFormSubmit(event) {
        event.preventDefault();
         if (formObject.comment) {
             //find way to get to project creator email, place in parentheses of sendEmail
             sendEmail()
            API.updateProject({
                comment: formObject.comment
            })
                .then(res => { return alert('Thanks for applying! The project creator will contact you if selected.') })
                .catch(err => console.log(err));
        }
    };

    return (<>

        <h1>Want to join? Fill out the form below!</h1>
        <div>
            <form>
                {/* <Input
                    onChange={handleInputChange}
                    name="email"
                    placeholder="Enter email address (required)"
                    value={email}
                    required
                /> */}
                <TextArea
                    onChange={handleInputChange}
                    name="comment"
                    placeholder="Tell the project owner why you'd be a good fit!"
                  
                />
                <FormBtn
                    disabled={!(formObject.comment)}
                    //  write code send an email to creator via nodemailer 
                    onClick={handleFormSubmit} // handleForm Submit && nodemailer???
                >
                    Submit
                </FormBtn>
            </form>
        </div>
    </>)
}

export default Developer;