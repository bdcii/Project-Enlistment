import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../../components/Grid";

function Creator() {
    return (<Col size="md-6">
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
  
  </Col>)
  }

  export default Creator;