import React, { useEffect, useState } from "react";
import API from "../../../utils/API";
import { Dropdown } from "react-bootstrap";
import Project from "./Project";
import { Link, useParams } from "react-router-dom";




// This is to set the status for the Project to Open or Closed
function Status() {

    const { id } = useParams()
    function changeStatus(status) {
        API.updateProjectStatus(id, status)
            .then(res => { return alert('Project status has changed to ' + status) })
            .catch(err => console.log(err));
    }

    const [status, setStatus] = useState('');


    const handleSelect = (e) => {
        console.log(e);
        setStatus(e)
    }
    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle id="dropdown-basic">
                Status
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={() => changeStatus(true)}>Open</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={() => changeStatus(false)}>Closed</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Status;
