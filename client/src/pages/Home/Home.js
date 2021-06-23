import React, { useEffect, useState } from "react";
import './Home.css';
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

function Home() {
    // Setting our component's initial state
    const [projects, setProjects] = useState([])
    
    useEffect(() => {
        loadProjects()
    }, [])

    // retrieves all projects
    function loadProjects () {
        API.getProjects()
        .then(res => setProjects(res.data))
        .catch(err => console.log(err))
    };

    return (
            <List>
            {projects.map(project => {
            return (
              <ListItem key={project._id}>  
              <a href={"/projects/" + project._id}>
                <strong>{project.title}</strong>
              </a>
              <p>{project.description}</p>
              <p>Developers Needed: {project.dev_Need}</p>
              <a href={"/users/" + project.user_id}>
                <strong>Link to the Project Manager's Page</strong>
              </a>
              </ListItem>
            )}
    )}
    </List>

)};

export default Home;