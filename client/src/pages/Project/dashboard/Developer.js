import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, TextArea, FormBtn } from "../../../components/Form";



function Developer() {
    const [formObject, setFormObject] = useState({})

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.comment) {
          API.updateProject({
            comment: formObject.comment
          })
            .then(res => {return alert('Thanks for applying! The project creator will contact you if selected.') })
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
                    // write code to push text to db of the project onclick, write code send an email to creator via nodemailer
                    onClick={handleFormSubmit}
                >
                    Submit
                </FormBtn>
            </form>
        </div>
    </>)
}

export default Developer;