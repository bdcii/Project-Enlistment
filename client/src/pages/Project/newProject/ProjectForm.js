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
            <div className="form-group text-left">
            <label htmlFor="ProjectName">Project Name</label>
            <input type="Text" 
                   className="form-control" 
                   id="Name" 
                   aria-describedby="ProjectName" 
                   placeholder="Enter Project Name"
            />
            
            </div>
            <div className="form-group text-left">
                <label htmlFor="ProjectDescription">Project Description</label>
                <textarea type="text" 
                    className="form-control" 
                    id="ProjectDescription" 
                    placeholder="Project Description"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="Technologies">Technologies</label>
                <textarea type="Text" 
                    className="form-control" 
                    id="Technologies" 
                    placeholder="Enter technologies you would like to use on project"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="ProjectStartDate">Project Start Date</label>
                <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="form-group text-left">
                <label htmlFor="ProjectEndDate">Project End Date</label>
                <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
            </div>
            <div className="form-group text-left">
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
            <div className="form-group text-left">
                <label htmlFor="Technologies">Team Size</label>
                <input type="Text" 
                    className="form-control" 
                    id="Team Size" 
                    placeholder="Enter team Size"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="Skillsneeded">Skills Needed</label>
                <textarea type="Text" 
                    className="form-control" 
                    id="Skills Needed" 
                    placeholder="List the skills you need for project"
                />
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
            >
                Create project
            </button>
            </div>
           
        </form>
      )
  
   }
export default ProjectForm;