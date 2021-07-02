import React, { useState } from "react";
import "./ProjectForm.css";
import { saveProject } from "../../utils/API";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";





function ProjectForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [closed, setClosed] = useState(false);
    const handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value 
    }
    const onCreateClick = e => {
        saveProject()
    }

    return (
        <form>
            <div className="Container-1">
                <div className="Name">
                    <label htmlFor="ProjectName">Project Name</label>
                    <input type="Text"
                        className="Name-input"
                        id="Name"
                        aria-describedby="ProjectName"
                        placeholder="Enter Project Name"
                    />

                </div>
                <div className="Project-Description">
                    <label htmlFor="ProjectDescription">Project Description</label>
                    <textarea type="text"
                        className="Description-text"
                        id="ProjectDescription"
                        placeholder="Project Description"
                    />
                </div>
                <div className="Technologies">
                    <label htmlFor="Technologies">Technologies</label>
                    <textarea type="Text"
                        className="Tech-text"
                        id="Technologies"
                        placeholder="Enter technologies you would like to use on project"
                    />
                </div>
                <div className="Start-Date">
                    <label htmlFor="ProjectStartDate">Project Start Date</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="End-Date">
                    <label htmlFor="ProjectEndDate">Project End Date</label>
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
                </div>

                <div className="Status">
                    <label htmlFor="Status">Status</label>
                    <input
                        type="checkbox"
                        name="Open"
                        checked={open}
                        onChange={handleChange}
                    />
                    Open
                    <input
                        type="checkbox"
                        name="Closed"
                        checked={closed}
                        onChange={handleChange}
                    />
                    Closed
                </div>
                <div className="Team-Size">
                    <label htmlFor="Technologies">Team Size</label>
                    <input type="Text"
                        className="Team-input"
                        id="Team Size"
                        placeholder="Enter team Size"
                    />
                </div>
                <div className="Skills">
                    <label htmlFor="Skillsneeded">Skills Needed</label>
                    <textarea type="Text"
                        className="Skills-text"
                        id="Skills Needed"
                        placeholder="List the skills you need for project"
                    />
                </div>
                <button
                    onClick={e => {

                    }}
                    type="submit"
                    className="CreateButton"
                >
                    Create project
                </button>
            </div>

        </form>
    )

}
export default ProjectForm;