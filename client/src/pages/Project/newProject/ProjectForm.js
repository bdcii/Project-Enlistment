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
                    <label htmlFor="ProjectName">Project Name</label>
                    <input type="Text"
                        className="form-control"
                        id="title"
                        aria-describedby="ProjectName"
                        placeholder="Enter Project Name"
                        onChange={handleChange}
                    />

                </div>
                <div className="form-group text-left">
                    <label htmlFor="ProjectDescription">Project Description</label>
                    <textarea type="text"
                        className="form-control"
                        id="description"
                        placeholder="Project Description"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="Technologies">Technologies</label>
                    <textarea type="Text"
                        className="form-control"
                        id="technologies"
                        placeholder="Enter technologies you would like to use on project"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="Technologies">Project Start Date</label>
                    <textarea type="Text"
                        className="form-control"
                        id="startDate"
                        placeholder="Enter technologies you would like to use on project"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="Technologies">Project End Date</label>
                    <textarea type="Text"
                        className="form-control"
                        id="endDate"
                        placeholder="Enter technologies you would like to use on project"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="Technologies">Status</label>
                    <input
                        type="checkbox"
                        name="isChecked"
                        id="open"
                        checked={state.open}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="Technologies">Team Size</label>
                    <textarea type="Text"
                        className="form-control"
                        id="size"
                        placeholder="Enter technologies you would like to use on project"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="Technologies">Skills Wanted</label>
                    <textarea type="Text"
                        className="form-control"
                        id="skills"
                        placeholder="Enter technologies you would like to use on project"
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleFormSubmit}
                >
                    Create project
                </button>
            </div>

        </form>
    )
}

export default ProjectForm;