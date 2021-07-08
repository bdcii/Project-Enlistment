import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import DeleteBtn from "../../../components/DeleteBtn";
import AddBtn from "../../../components/AddBtn";
import { Col, Row, Container } from "../../../components/Grid";
import { List, ListItem } from "../../../components/List";
import { Link, useParams } from "react-router-dom";
import Status from "./Status"




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
    <Status/>
  

   
    {/* Pull a list of developers that have shown interest in joining project.  Should be able to click link to their personal
                      profile.  Buttons to Add/Remove developers? */}
    <h4>Select developers to join your project below!</h4>


    {/* ***reference users that have filled out form and shown interest in joining specific project. 
                  add buttons that allow project owner to add users to project/remove from candidate pool */}

    {project.apply ? (
      <List>
        {project.apply.map(userId => (
          
          <ListItem key={userId}>
           
            <Link to={"/users/" + userId}>
              
                <p>Applicant!</p>
              
            </Link>
            <AddBtn onClick={() => API.updateProjectMembership(userId, project._id).then(alert('Successfully added Developer to your project!'))}/>
           {/* <DeleteBtn onClick={() => API.removeProjectApply(project._id, userId)} /> */}
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