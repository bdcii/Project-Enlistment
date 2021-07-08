import Axios from "axios";
import React, { Component } from "react";
import ReactStars from 'react-stars';
import "./Profile.css";

// function Profile() {
class Profile extends Component {
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
                    currentUserIndex: data.findIndex((user) => { return user._id === user.id }),
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
        Axios.put('/api/users/:id', { newRating })
    }

    //pull in projects
    renderProjects() {
        const { users, currentUserIndex } = this.state;
        const currentUser = users && users[currentUserIndex];
        if (currentUser) {
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
                <h2 id="devProfile">Developer Profile</h2>
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

                    <div className="set"><strong>Skill Set</strong></div>
                    <ul className="list">{currentUser && currentUser.skills ? currentUser.skills.toString().split(',').map((data, i) => {
                        return <li key={i}>{data}</li>
                    }) : 'loading'}
                    </ul>
                    <hr />
                </section>
                <section id="userProjects">
                    <div className="set"><strong>Projects</strong></div>
                    <ul className="list">
                        {currentUser && currentUser.projects ? currentUser.projects.map((data, _id) => {
                            return <li key={data._id}>{data.title}</li>
                        }) : 'loading'}
                    </ul>
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
export default Profile;