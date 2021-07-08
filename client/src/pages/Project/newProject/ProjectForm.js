import React, { useState, useContext } from "react";
import "./ProjectForm.css";
//import { saveProject } from "../../utils/API";
import API from '../../../utils/API';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, useHistory } from "react-router-dom";
import UserContext from "../../../utils/UserContext";

function ProjectForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [closed, setClosed] = useState(false);
    const { user } = useContext(UserContext);
    const history = useHistory();
    const handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setState({
            ...state,
            // [e.target.name]: value,
            // ...state,
            [e.target.getAttribute('id')]: value,
        })
    }


    const [state, setState] = useState({
        isChecked: false,
        // user:data
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        if (state.title && user && user.id) {
            API.saveProject({
                title: state.title,
                _creator: user.id,
                description: state.description,
                open: state.open,
                startDate: state.startDate,
                endDate: state.endDate,
                size: state.size,
                skills: state.skills,
            })
                .then(res => {if (res.status === 200) {
                 console.log(res)
                 alert("You have successfully added a new project");
                 return history.push("/")
                } else {
                alert("Your project was not added, please make sure you are logged in as that is a requirement.  If you are already logged in, please refresh the page and try again.");
                return history.push("/projectform")
            };
    })
    }}

    return (
        <form>
            <br />
  
            <h1 className="enterProject">Enter New Project</h1>
            <div className="loginAlert">** Must be logged in **</div>

            <div className="Container-1">
                <div className="form-group text-left">
                    <div className="projName"><label htmlFor="ProjectName">Project Name:</label></div>
                    <div className="projNameInput"><input type="Text"
                        className="form-control"
                        id="title"
                        aria-describedby="ProjectName"
                        placeholder="Enter Project Name"
                        onChange={handleChange}
                    /></div>

                </div>
                <div className="form-group text-left">
                    <div className="projDesc"><label htmlFor="ProjectDescription">Project Description:</label></div>
                    <div className="projDescInput"><textarea type="text"
                        className="form-control"
                        id="description"
                        placeholder="Enter Project Description"
                        onChange={handleChange}
                    /></div>
                </div>
                <div className="form-group text-left">
                    <div className="tech"><label htmlFor="Technologies">Technologies:</label></div>
                    <div className="techInput"><textarea type="Text"
                        className="form-control"
                        id="technologies"
                        placeholder="Enter Technologies Used in Project"
                        onChange={handleChange}
                    /></div>
                </div>
                <div className="form-group text-left">
                    <div className="startDate"><label htmlFor="Technologies">Project Start Date:</label></div>
                    <div className="startDateInput"><DatePicker className="datePickStart" selected={startDate} onChange={(date) => setStartDate(date)}
                        className="form-control"
                        id="startDate"
                        placeholder="Enter Project Start Date"
                    /></div>
                </div>
                <div className="form-group text-left">
                    <div className="endDate"><label htmlFor="Technologies">Project End Date:</label></div>
                    <div className="endDateInput"><DatePicker className="datePickEnd" selected={endDate} onChange={(date) => setEndDate(date)}
                        className="form-control"
                        id="endDate"
                        placeholder="Enter Project End Date"
                    /></div>
                </div>
                <div className="form-group text-left">
                    <div className="status"><label htmlFor="StatusInput">Status:</label></div>
                    <div className="statusInput"><span className="statusIn">
                        Open<input
                            type="checkbox"
                            name="Open"
                            onChange={handleChange}
                        /></span>
                        <span className="statusIn">
                        Closed<input
                            type="checkbox"
                            name="Closed"
                            onChange={handleChange}
                        /></span>
                    </div>
                </div>
                <div className="form-group text-left">
                    <div className="size"><label htmlFor="Technologies">Team Size:</label></div>
                    <div className="sizeInput"><textarea type="Text"
                        className="form-control"
                        id="size"
                        placeholder="Enter Number of Team Members"
                        onChange={handleChange}
                    /></div>
                </div>
                <div className="form-group text-left">
                    <div className="skills"><label htmlFor="Technologies">Skills Wanted:</label></div>
                    <div className="skillsInput"><textarea type="Text"
                        className="form-control"
                        id="skills"
                        placeholder="Enter Skills Needed for the Project"
                        onChange={handleChange}
                    /></div>
                </div>
                <br />
                <button
                    type="submit"
                    className="CreateButton"
                    onClick={handleFormSubmit}
                >
                    Create Project
                </button>

            </div>
            <br />
        </form>
    )

}
export default ProjectForm;