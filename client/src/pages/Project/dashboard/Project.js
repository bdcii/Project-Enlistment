import React, { useEffect, useState, useContext } from "react";
import './Project.css';
import { List, ListItem } from "../../../components/List";
import API from "../../../utils/API";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../../../components/Grid";
import { Input, TextArea, FormBtn } from "../../../components/Form";
import Creator from "./Creator";
import Developer from "./Developer";
import UserContext from "../../../utils/UserContext";
import ProjManager from '../../ProjManager/ProjManager';

//This is a test value to see if I can get the Creator and Developer views to toggle
const test = true;

function Project() {

    const { user } = useContext(UserContext);
    // const [users, setUsers] = useState();
 

    // useEffect(() => {
    //     API.getUsers(users)
    //         .then(res => setUsers(res.data))
    //         .catch(err => console.log(err));
    // }, [])

    //sets project component's initial state
    const [project, setProject] = useState({})


    const { id } = useParams()
    useEffect(() => {
        API.getProject(id)
            .then(res => setProject(res.data))
       
            .catch(err => console.log(err));
    }, [])



    return (
        <Container fluid>
            <Row>
                <Col size="md-6">

                    <h1>{project.title}</h1>
                    <p>Status: {project.open ? 'Open' : 'Closed'}</p>
                    <p>About: {project.description}</p>
                    <p>Developers needed: {project.size}</p>
                    <Link to={"/users/" + project._creator}>
                        View Project Owner's Profile</Link>

                </Col>
                <Col size="md-6 sm-12">
                 {test ? <Creator/> : <Developer/>}
                </Col>
            </Row>
        </Container>
    )
}

export default Project;