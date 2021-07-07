import React, { useState, useContext } from "react";
import "./ProjectForm.css";
//import { saveProject } from "../../utils/API";
import API from '../../../utils/API';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UserContext from "../../../utils/UserContext";

function ProjectForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [closed, setClosed] = useState(false);
    const {user} = useContext(UserContext);
    const handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setState({
            ...state,
            [e.target.name]: value,
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
                skills: state.skills                
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        };
    }

    return (
        <form>
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
                        placeholder="Project Description"
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
                    <div className="startDateInput"><DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                        className="form-control"
                        id="startDate"
                        placeholder="Enter Project Start Date"
                    /></div>
                </div>
                <div className="form-group text-left">
                    <div className="endDate"><label htmlFor="Technologies">Project End Date:</label></div>
                    <div className="endDateInput"><DatePicker selected={endDate} onChange={(date) => setEndDate(date)}
                        className="form-control"
                        id="endDate"
                        placeholder="Enter Project End Date"
                    /></div>
                </div>
                <div className="form-group text-left">
                    <div className="status"><label htmlFor="Technologies">Status:</label></div>
                    <div className="statusInput"><input
                        type="checkbox"
                        name="Closed"
                        checked={setClosed}
                        onChange={handleChange}
                    /></div>
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