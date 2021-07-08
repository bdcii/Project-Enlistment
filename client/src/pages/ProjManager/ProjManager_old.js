import Axios from "axios";
import React, { Component, useContext } from "react";
import ReactStars from 'react-stars';
import UserContext from "../../utils/UserContext";
import "./ProjManager.css";

class ProjManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            projects: [],
            isLoaded: false,
            stars: [],
            avgRating: 0
        };
    }

    componentDidMount() {
        fetch('/api/users/')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    users: data,
                    currentUserIndex: data.findIndex((user) => { return user._id === this.props.match.params.id }),
                })
            });
    }
    //user rating
    ratingChanged = (newRating) => {
        let average = (arr) => Math.round(arr.reduce((a, b) => a + b) / arr.length);
        let currentStars = this.state.stars;
        currentStars.push(newRating);
        console.log(currentStars);
        let avgRating = average(currentStars);
        this.setState({ avgRating, stars: currentStars });

        console.log(newRating)
        //id for project._creator needs to go here
        Axios.put('/api/users', { newRating })
    }

    //pull in projects
    renderProjects() {
        const { users, currentUserIndex } = this.state;
        // const { user } = this.state.user;
        const currentUser = users && users[currentUserIndex];
        // if (user) {
        if (currentUser) {
            // const projects = user.projects.reduce((listProject, project) => {
            //     if (project._creator === user._id) { listProject.push(<li key={project._id}>{project.title}</li>) }
            const projects = currentUser.projects.reduce((listProject, project) => {
                if (project._creator === currentUser._id) { listProject.push(<li key={project._id}>{project.title}</li>) }
                return listProject
            }, [])
            return projects
        }
        return 'loading';
    }

    render() {

        const { users, currentUserIndex } = this.state;
        const currentUser = users && users[currentUserIndex];

        return (
            <>
                <br />
                <br />
                <h2 id="devProfile">Project Manager Profile</h2>
                <hr />
                <section id="profile">
                    <div className="name"><strong>Name: {currentUser && currentUser.firstName} {currentUser && currentUser.lastName}</strong></div>
                    <div>
                        <ul className="contact">
                            <li id="email"><strong>Email:</strong>&nbsp; <a href='mailto:{currentUser.email}'>{currentUser && currentUser.email}</a></li>
                            <li id="github"><strong>GitHub:</strong>&nbsp; <a href={currentUser && currentUser.github}>{currentUser && currentUser.github}</a></li>
                            <li id="linked"><strong>LinkedIn:</strong>&nbsp; <a href={currentUser && currentUser.linkedin}>{currentUser && currentUser.linkedin}</a></li>
                        </ul>
                    </div>
                    <hr />

                </section>
                <section id="userProjects">
                    <div className="set"><strong>Managed Projects</strong></div>
                    <ul className="list">
                        {this.renderProjects()}
                    </ul>
                    <hr />
                    <div className="star">
                    </div>

                    <div className="set userRating"><strong>User Rating</strong></div>
                    <div id="stars">
                        {<ReactStars className="starString"
                            count={5}
                            onChange={this.ratingChanged}
                            size={35}
                            edit={true}
                        />}
                    </div>
                    <p className="starStats">{currentUser && currentUser.firstName} has {this.state.avgRating} stars!</p>
                    <hr />
                </section>
                <br />
            </>
        )
    }
}
export default ProjManager;