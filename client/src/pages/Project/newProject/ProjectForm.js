// eslint-disable-next-line
import React, { useState } from "react";
import "./ProjectForm.css";
//import DatePicker from "react-datepicker";

 //function MyComponent() {
    
      //const [date, setDate] = useState(new Date());
    
     // const handleChange = date => setDate(date);
    
    
     // return <DatePicker selected={date} onChange={handleChange} />;

   // }

function ProjectForm() {
    return (
        class ProjectForm extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                value: 'Create your project idea down below'
              };
          
              this.handleChange = this.handleChange.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);
            }
          
            handleChange(event) {
              this.setState({value: event.target.value});
            }
          
            handleSubmit(event) {
              alert('Your Project was created!: ' + this.state.value);
              event.preventDefault();
            }
          
            render() {
              return (
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              );
            }
          }
        
        
        
    )
}

export default ProjectForm;