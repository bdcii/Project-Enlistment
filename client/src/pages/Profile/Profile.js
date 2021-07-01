import React, { Component } from "react";
import ReactStars from 'react-stars';
import "./Profile.css";

const ratingChanged = (newRating) => {
    console.log(newRating)

}

// function Profile() {
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            projects: [],
            isLoaded: false,
            stars: 3
        };
    }

    // renderStars() {
    //     let stars = [];
    //     for (let i = 1; i <= 5; i++) {
    //         // for (let userIndex = 0; userIndex >= 0; userIndex++) {
    //         //     state.users[currentUserIndex].stars;
    //         // }

    //         if (i <= this.state.stars) {
    //             stars.push(<span key={i} className="fa fa-star checked" onClick={
    //                 () => {
    //                     this.setState({ ...this.state, stars: i })
    //                     // state.users[state.currentUsersIndex].stars
    //                     // this.setState({ ...this.State, users: [...state.users] })
    //                 }
    //             }></span>)
    //         } else {
    //             stars.push(<span key={i} className="fa fa-star" onClick={
    //                 () => {
    //                     this.setState({ ...this.state, stars: i })
    //                 }
    //             }></span>)
    //         }
    //     }
    //     return stars
    // }

    componentDidMount() {
        fetch('/api/users/')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    users: data,
                    currentUserIndex: data.findIndex((user) => { return user._id === '60dba14537b42f1d0070c620' })
                })
            });
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

    //Need to display user data based on logged in user; login in not yet ready
    render() {
        const { users, currentUserIndex } = this.state;
        const currentUser = users && users[currentUserIndex];

        console.log(this.state);
        return (
            <>
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

                    <div className="set"><strong>User Rating</strong></div>
                    <div id="stars">
                        {/* {this.renderStars()} */}
                        {<ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={28}
                            edit={true}
                        />}
                    </div>
                    <hr />
                    <div className="row">
                        <div className="side">
                            <div>5 stars</div>
                        </div>
                        <div className="middle">
                            <div className="barContainer">
                                <div className="bar-5"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>100</div>
                        </div>
                        <div className="side">
                            <div>4 stars</div>
                        </div>
                        <div className="middle">
                            <div className="barContainer">
                                <div className="bar-4"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>54</div>
                        </div>
                        <div className="side">
                            <div>3 stars</div>
                        </div>
                        <div className="middle">
                            <div className="barContainer">
                                <div className="bar-3"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>8</div>
                        </div>
                        <div className="side">
                            <div>2 stars</div>
                        </div>
                        <div className="middle">
                            <div className="barContainer">
                                <div className="bar-2"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>2</div>
                        </div>
                        <div className="side">
                            <div>1 star</div>
                        </div>
                        <div className="middle">
                            <div className="barContainer">
                                <div className="bar-1"></div>
                            </div>
                        </div>
                        <div className="side right">
                            <div>1</div>
                        </div>
                    </div>
                    <hr />
                </section>
                <br />
            </>
        )
    }
}
export default Profile;