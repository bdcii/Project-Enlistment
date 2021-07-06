import React, { useEffect, useState } from "react";
import './Home.css';
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
// import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';

export function ProjectListItem({ project }) {
  return (

    <ListItem key={project._id}>

      <CardColumns>
        <Row>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Body className="cardBody">
              <Card.Link href={"/projects/" + project._id} className="projTitle">{project.title}</Card.Link>
              <Card.Text>
                <p className="projDesc">{project.description}</p>
                <p className="projDev">Developers Needed: {project.size}</p>
              </Card.Text>
              <Card.Link href={"/users/" + project._creator} className="projMan">
                <strong>Project Manager</strong>
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