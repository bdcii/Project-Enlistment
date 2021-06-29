import React, {useState}  from "react";
import "./ProjectForm.css";
//import DatePicker from "react-datepicker";

 //function MyComponent() {
    
      //const [date, setDate] = useState(new Date());
    
     // const handleChange = date => setDate(date);
    
    
     // return <DatePicker selected={date} onChange={handleChange} />;

   // }

   
        
   function ProjectForm() {
    const handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setState({
          ...state,
          [e.target.name]: value,
        })
      }
      const [state, setState] = useState({
        isChecked: false,
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
                <label htmlFor="Technologies">Project Start Date</label>
                <textarea type="Text" 
                    className="form-control" 
                    id="Technologies" 
                    placeholder="Enter technologies you would like to use on project"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="Technologies">Project End Date</label>
                <textarea type="Text" 
                    className="form-control" 
                    id="Technologies" 
                    placeholder="Enter technologies you would like to use on project"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="Technologies">Status</label>
                <input
          type="checkbox"
          name="isChecked"
          checked={state.isChecked}
          onChange={handleChange}
        />
            </div>
            <div className="form-group text-left">
                <label htmlFor="Technologies">Team Size</label>
                <textarea type="Text" 
                    className="form-control" 
                    id="Technologies" 
                    placeholder="Enter technologies you would like to use on project"
                />
            </div>
            <div className="form-group text-left">
                <label htmlFor="Technologies">Skills Wanted</label>
                <textarea type="Text" 
                    className="form-control" 
                    id="Technologies" 
                    placeholder="Enter technologies you would like to use on project"
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