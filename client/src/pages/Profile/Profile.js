import React, { Component } from "react";
import "./Profile.css";

// function Profile() {
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            projects: [],
            isLoaded: false,
            stars: 3
        };
    }

    renderStars() {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= this.state.stars) {
                stars.push(<span className="fa fa-star checked" onClick={
                    () => {
                        this.setState({ stars: i })
                    }
                }></span>)
            } else {
                stars.push(<span className="fa fa-star" onClick={
                    () => {
                        this.setState({ stars: i })
                    }
                }></span>)
            }
        }
        return stars
    }

    componentDidMount() {
        fetch('/api/users/60db5a323eb4a94cb4c2f5f7')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    users: data,
                    projects: data
                });
            });
    }

    //Need to display user data based on logged in user; login in not yet ready
    render() {
        const { users } = this.state;
        const { projects } = this.state;

        console.log(this.state);
        return (
            <>
                <h2 id="devProfile">Developer Profile</h2>
                <hr />
                <section id="profile">
                    <div className="name"><strong>Name: {users.firstName} {users.lastName}</strong></div>
                    <div>
                        <ul className="contact">
                            <li id="email"><strong>Email:</strong>&nbsp; <a href='mailto:{user.email}'>{users.email}</a></li>
                            <li id="github"><strong>GitHub:</strong>&nbsp; <a href={users.github}>{users.github}</a></li>
                            <li id="linked"><strong>LinkedIn:</strong>&nbsp; <a href={users.linkedin}>{users.linkedin}</a></li>
                        </ul>
                    </div>
                    <hr />

                    <div className="set"><strong>Skill Set</strong></div>
                    <ul className="list">{users.skills ? users.skills.toString().split(',').map((data) => {
                        return <li>{data}</li>
                    }) : 'loading'}
                    </ul>
                    <hr />
                </section>
                <section id="userProjects">
                    <div className="set"><strong>Current Projects</strong></div>
                    <ul className="list">
                        {projects._creator ? projects._creator.toString().split(',').map((data) => {
                            return <li>{data.title}</li>
                        }) : 'loading'}
                    </ul>
                    <div className="set"><strong>Requested Projects</strong></div>
                    <ul className="list">
                        {projects.apply ? projects.apply.map((data) => {
                            return <li>{data.title}</li>
                        }) : 'loading'}
                    </ul>
                    <div className="set"><strong>Completed Projects</strong></div>
                    <ul className="list">
                        <li className="item">display list of projects participated on</li>
                    </ul>
                    <div className="set"><strong>Managed Projects</strong></div>
                    <ul className="list">
                        {users.projects ? users.projects.map((data) => {
                            return <li>{data.title}</li>
                        }) : 'loading'}
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