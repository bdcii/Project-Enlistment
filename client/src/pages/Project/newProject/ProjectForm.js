import React, { useState}  from "react";
import "./ProjectForm.css";
import DatePicker, {setStartDate, startdate } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


 
  function ProjectForm() {
   
    const handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setState({
          ...state,
          [e.target.name]: value,
        })
      }
      const [state, setState] = useState({
        Open: false,
        Closed: false,
      });
    
     

      return(
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
                <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="End-Date">
                <label htmlFor="ProjectEndDate">Project End Date</label>
                <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="Status">
                <label htmlFor="Status">Status</label>
                <input
          type="checkbox"
          name="Open"
          checked={state.Open}
          onChange={handleChange}
        />
        Open
        <input
          type="checkbox"
          name="Closed"
          checked={state.Closed}
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