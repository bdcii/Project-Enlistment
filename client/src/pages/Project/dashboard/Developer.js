import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, TextArea, FormBtn } from "../../../components/Form";



function Developer(){
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
  
   return (<Col size="md-6 sm-12">
   
    <h1>Want to join? Fill out the form below!</h1>
        <div>
            <form>
                {/* <Input
    onChange={handleInputChange}
    name="title"
    placeholder="Title (required)"
  />
  <Input
    onChange={handleInputChange}
    name="author"
    placeholder="Author (required)"
  /> */}
                <TextArea
                    onChange={handleInputChange}
                    name="comment"
                    placeholder="Tell the project owner why you'd be a good fit!"
                />
                <FormBtn
                    // disabled={!(formObject.author && formObject.title)}
                    onClick={handleFormSubmit}
                >
                    Submit
                </FormBtn>
            </form>
        </div>
    </Col>)
  }

  export default Developer;