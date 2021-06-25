import React, { useEffect, useState } from "react";
import './Home.css';
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';

export function ProjectListItem({ project }) {
  return (

      <ListItem key={project._id}>

        <CardColumns>
          <Row>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Link href={"/projects/" + project._id}>{project.title}</Card.Link>
                <Card.Text>
                  <p>{project.description}</p>
                  <p>Developers Needed: {project.dev_Need}</p>
                </Card.Text>
                <Card.Link href={"/users/" + project.user_id}>
                  <strong>Link to the Project Manager's Page</strong>
                </Card.Link>
              </Card.Body>
            </Card>
          </Row>
        </CardColumns>
      </ListItem>


  )
}

function Home() {
  // Setting our component's initial state
  const [projects, setProjects] = useState([])

  useEffect(() => {
    loadProjects()
  }, [])

  // retrieves all projects
  function loadProjects() {
    API.getProjects()
      .then(res => setProjects(res.data))
      .catch(err => console.log(err))
  };

  return (<List>{projects.map(project => (<ProjectListItem project={project} key={project._id} />))}</List>)
};

export default Home;