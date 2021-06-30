import React, { Component } from "react";
import "./Profile.css";

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

    renderStars() {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= this.state.stars) {
                stars.push(<span key={i} className="fa fa-star checked" onClick={
                    () => {
                        this.setState({ ...this.state, stars: i })
                    }
                }></span>)
            } else {
                stars.push(<span key={i} className="fa fa-star" onClick={
                    () => {
                        this.setState({ ...this.state, stars: i })
                    }
                }></span>)
            }
        }
        return stars
    }

    componentDidMount() {
        fetch('/api/users/60dba14537b42f1d0070c620')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    user: data
                });
            });
    }

    //pull in projects
    renderProjects() {
        const { user } = this.state;
        if (user) {
            const projects = user.projects.reduce((listProject, project) => {
                if (project._creator = user._id) { listProject.push(<li key={project._id}>{project.title}</li>) }
                return listProject
            }, [])
            console.log(projects);
            return projects
        }
        return 'loading';
    }

    //Need to display user data based on logged in user; login in not yet ready
    render() {
        const { user } = this.state;
        // const { projects } = this.state;

        console.log(this.state);
        return (
            <>
                <h2 id="devProfile">Developer Profile</h2>
                <hr />
                <section id="profile">
                    <div className="name"><strong>Name: {user && user.firstName} {user && user.lastName}</strong></div>
                    <div>
                        <ul className="contact">
                            <li id="email"><strong>Email:</strong>&nbsp; <a href='mailto:{user.email}'>{user && user.email}</a></li>
                            <li id="github"><strong>GitHub:</strong>&nbsp; <a href={user && user.github}>{user && user.github}</a></li>
                            <li id="linked"><strong>LinkedIn:</strong>&nbsp; <a href={user && user.linkedin}>{user && user.linkedin}</a></li>
                        </ul>
                    </div>
                    <hr />

                    <div className="set"><strong>Skill Set</strong></div>
                    <ul className="list">{user && user.skills ? user.skills.toString().split(',').map((data, i) => {
                        return <li key={i}>{data}</li>
                    }) : 'loading'}
                    </ul>
                    <hr />
                </section>
                <section id="userProjects">
                    <div className="set"><strong>Projects</strong></div>
                    <ul className="list">
                        {user && user.projects ? user.projects.map((data, i) => {
                            return <li key={i}>{data.title}</li>
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
                        {this.renderStars()}
                    </div>
                    <p id="average"># average based on ## reviews</p>
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