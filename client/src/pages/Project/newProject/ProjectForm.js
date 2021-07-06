import React, { useState } from "react";
import "./ProjectForm.css";
<<<<<<< HEAD
//import { saveProject } from "../../utils/API";
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
    //const onCreateClick = e => {
     //   saveProject()
   // }

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
                        checked={setOpen}
                        onChange={handleChange}
                    />
                    Open
                    <input
                        type="checkbox"
                        name="Closed"
                        checked={setClosed}
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
=======
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
>>>>>>> 5b5e3f811c0ad6da2788fb28a6400a5da6003e9d
                >
                    Create project
                </button>
            </div>

        </form>
    )
<<<<<<< HEAD

}
=======
}

>>>>>>> 5b5e3f811c0ad6da2788fb28a6400a5da6003e9d
export default ProjectForm;