import React, { useEffect, useState } from "react";
import './Project.css';
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";
import { Link } from "react-router-dom";

function Project() {
    const [project, setProject] = useState({})

    const {id} = useParams()
    useEffect(() => {
      API.getProject(id)
        .then(res => setProject(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
        <>
        <div className="container">
            <h1>{project.title}</h1>
            <p>About:{project.description}</p>
            <p>Developers needed: {project.dev_Need}</p>
            <Link to={"/users/" + project.user._id}>
                View Project Owner's Profile</Link> 
            
            

        {/* <div className="Button">
            <button>Apply to Join!</button>
        </div> */}
        </div>
       
        </>
    )
}

export default Project;