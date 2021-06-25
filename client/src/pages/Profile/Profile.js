import React, { Component } from "react";
import "./Profile.css";

// function Profile() {
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('./api')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    isLoaded: true,
                    users: data
                });
            });
    }
    //Need to display user data based on logged in user
    render() {
        const { user } = this.state;
        return (
            <>
                <h2 id="devProfile">Developer Profile</h2>
                <hr />
                <section id="profile">
                    <div className="name"><strong>Name: First {user.firstName} Last {user.lastName}</strong></div>
                    {/* <div className="name">Last Name - login info</div> */}
                    <div>
                        <ul className="contact">
                            <li id="email"><strong>Email:</strong>&nbsp; <a href='mailto:{user.email}'>{user.email}</a></li>
                            <li id="github"><strong>GitHub:</strong>&nbsp; <a href={user.github}>{user.github}</a></li>
                            <li id="linked"><strong>LinkedIn:</strong>&nbsp; <a href={user.linkedin}>LinkedIn</a></li>
                        </ul>
                    </div>
                    <hr />

                    <div className="set"><strong>Skill Set</strong></div>
                    <ul className="list">
                        <li className="item">display all skills for user in list format</li>
                    </ul>
                    <hr />
                </section>
                <section id="userProjects">
                    <div className="set"><strong>Current Projects</strong></div>
                    <ul className="list">
                        <li className="item">display list of current projects working on</li>
                    </ul>
                    <div className="set"><strong>Requested Projects</strong></div>
                    <ul className="list">
                        <li className="item">display list of projects applied for</li>
                    </ul>
                    <div className="set"><strong>Completed Projects</strong></div>
                    <ul className="list">
                        <li className="item">display list of projects participated on</li>
                    </ul>
                    <div className="set"><strong>Managed Projects</strong></div>
                    <ul className="list">
                        <li className="item">display list of current projects initiated</li>
                    </ul>
                    <hr />

                    <div className="set"><strong>User Rating</strong></div>
                    <div id="stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
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