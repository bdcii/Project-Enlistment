import React, { useState } from "react";
import "./ProjectForm.css";
import API from '../../../utils/API';
//import DatePicker from "react-datepicker";

//function MyComponent() {

//const [date, setDate] = useState(new Date());

// const handleChange = date => setDate(date);


// return <DatePicker selected={date} onChange={handleChange} />;

// }

function ProjectForm() {
    const handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        console.log(e.target);
        setState({
            ...state,
            [e.target.getAttribute('id')]: value,
        })
    }
    const [state, setState] = useState({
        isChecked: false,
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log('listening');
        console.log(state);
        if (state.title) {
            // && state.user._creator
            API.saveProject({
                title: state.title,
                _creator: '60e35d1e7accf41a50e44087',
                description: state.description,
                technologies: state.technologies,
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
                    <div className="startDateInput"><textarea type="Text"
                        className="form-control"
                        id="startDate"
                        placeholder="Enter Project Start Date"
                        onChange={handleChange}
                    /></div>
                </div>
                <div className="form-group text-left">
                    <div className="endDate"><label htmlFor="Technologies">Project End Date:</label></div>
                    <div className="endDateInput"><textarea type="Text"
                        className="form-control"
                        id="endDate"
                        placeholder="Enter Project End Date"
                        onChange={handleChange}
                    /></div>
                </div>
                <div className="form-group text-left">
                    <div className="status"><label htmlFor="Technologies">Status:</label></div>
                    <div className="statusInput"><input
                        type="checkbox"
                        name="isChecked"
                        id="open"
                        checked={state.open}
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
                    className="btn btn-primary"
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