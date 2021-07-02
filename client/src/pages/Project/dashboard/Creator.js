import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import { Col, Row, Container } from "../../../components/Grid";
import { List, ListItem } from "../../../components/List";
import { Link, useParams } from "react-router-dom";



function Creator() {

  //sets project component's initial state
  const [project, setProject] = useState({})

  const { id } = useParams()
  useEffect(() => {
    API.getProject(id)
      .then(res => setProject(res.data))
      .catch(err => console.log(err));
  }, [])
  return (<>
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
                  add buttons that allow project owner to add users to project/remove from candidate pool */}

    {project.apply ? (
      <List>
        {project.apply.map(apply => (
          <ListItem key={apply._id}>

            <Link to={"/users/" + apply._id}>
              <strong>
                Applicant!
              </strong>
            </Link>
            {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
          </ListItem>
        ))}
      </List>
    ) : (
      <h3>No applicants yet!</h3>
    )}

{/* code to display comments of users interested in joining project */}
{project.comment ? (
      <List>
        {project.comment.map(apply => (
          <ListItem key={project.comment}>

           
              <strong>
                {project.comment}
              </strong>
          
            {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
          </ListItem>
        ))}
      </List>
    ) : (
      <h3>No applicants yet!</h3>
    )}
  </>
  )
}

export default Creator;