import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, TextArea, FormBtn } from "../../../components/Form";
import Axios from "axios";
import sendEmail from "../../../utils/nodemailer"
import { Link, useParams } from "react-router-dom";



function Developer() {
    
    const [formObject, setFormObject] = useState({})

     //sets project component's initial state
    //  const [project, setProject] = useState({})


     const { id } = useParams()
    //  useEffect(() => {
    //      API.getProject(id)
    //          .then(res => setProject(res.data))
    //          .catch(err => console.log(err));
    //  }, [])

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
             console.log(formObject.comment)
            API.updateProjectComment(id, formObject.comment)
                .then(res => { return alert('Thanks for applying! The project creator will contact you if selected.') })
                .catch(err => console.log(err));
        }
    };

    return (<>

        <h1>Want to join? Fill out the form below!</h1>
        <div>
            <form>
            
                <TextArea
                    onChange={handleInputChange}
                    name="comment"
                    placeholder="Tell the project owner why you'd be a good fit!"
                  
                />
                <FormBtn
                    disabled={!(formObject.comment)}
                    
                    onClick={handleFormSubmit} 
                >
                    Submit
                </FormBtn>
            </form>
        </div>
    </>)
}

export default Developer;