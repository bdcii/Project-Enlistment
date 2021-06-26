import React, { useEffect, useState } from "react";
import './Project.css';
// import { List, ListItem } from "../../../components/List";
import API from "../../../utils/API";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, TextArea, FormBtn } from "../../../components/Form";

function Project() {
    //sets project component's initial state
    const [project, setProject] = useState({})
    //sets initial state for the form
    const [formObject, setFormObject] = useState({})

    const { id } = useParams()
    useEffect(() => {
        API.getProject(id)
            .then(res => setProject(res.data))
            .catch(err => console.log(err));
    }, [])

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
        // //     synopsis: formObject.synopsis
        // //   })
        // //     .then(res => loadBooks())
        // //     .catch(err => console.log(err));
        // }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">

                    <h1>{project.title}</h1>
                    <p>About: {project.description}</p>
                    <p>Developers needed: {project.dev_Need}</p>
                    <Link to={"/users/" + project.user_id}>
                        View Project Owner's Profile</Link>



                    {/* <div className="Button">
            <button>Apply to Join!</button>
        </div> */}

                </Col>
                <Col size="md-6 sm-12">
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
                </Col>
                <Col size="md-6">

                    <h1>Owner Dashboard</h1>
                    {/* List developers that you have selected to join the project. Ability to edit list/remove developers? */}
                    <h4>Current project members:</h4>

                    {/* Pull a list of developers that have shown interest in joining project.  Should be able to click link to their personal
                    profile.  Buttons to Add/Remove developers? */}
                    <h4>Select developers to join your project below!</h4>
                    
                    



                    {/* <div className="Button">
            <button>Apply to Join!</button>
        </div> */}

                </Col>
            </Row>
        </Container>
    )
}

export default Project;