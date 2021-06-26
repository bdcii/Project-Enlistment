import React, { useEffect, useState } from "react";
import './Project.css';
// import { List, ListItem } from "../../../components/List";
import API from "../../../utils/API";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, TextArea, FormBtn } from "../../../components/Form";
import { List, ListItem } from "../components/List";

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
        // //     comment: formObject.comment
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

                    {/* ***code below must be updated to reference users that the owner selected to join project(give option to edit/update?)
                    
                    {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}

                    {/* Pull a list of developers that have shown interest in joining project.  Should be able to click link to their personal
                    profile.  Buttons to Add/Remove developers? */}
                    <h4>Select developers to join your project below!</h4>


{/* *** Code below needs to be updated to reference users that have filled out a form and shown interest in joining specific project. 
                add buttons that allow project owner to add users to project/remove from candidate pool

                    {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/users/" + user._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}





                    {/* <div className="Button">
            <button>Apply to Join!</button>
        </div> */}

                </Col>
            </Row>
        </Container>
    )
}

export default Project;