// eslint-disable-next-line
import React, { useState } from "react";
import "./Project.css";
//import DatePicker from "react-datepicker";

 //function MyComponent() {
    
      //const [date, setDate] = useState(new Date());
    
     // const handleChange = date => setDate(date);
    
    
     // return <DatePicker selected={date} onChange={handleChange} />;

   // }

function Project() {
    return (
        <>
        <div className="container">
            <input>Project Name</input>
            <input>Project Description</input>
            <input>Technologies used</input>
            <input>Start Date</input>
            <input>Completion Date</input>
            <input>Status</input>
            <input>Team Size</input>
            <input>Skills Wanted</input>
            

        <div className="Button">
            <button>Create Project</button>
        </div>
        </div>
       
        </>
    )
}

export default Project;