import React, { useEffect, useState } from "react";
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
        // // event.preventDefault();
        // // if (formObject.title && formObject.author) {
        // //   API.saveBook({
        // //     title: formObject.title,
        // //     author: formObject.author,
        // //     comment: formObject.comment
        // //   })
        // //     .then(res => loadBooks())
        // //     .catch(err => console.log(err));
        // }
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