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
                <hr />
                <h2>Developer Profile</h2>
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

                    <div className="skillSet"><strong>Skill Set</strong></div>
                    <ul className="skillList">
                        <li className="skills">display all skills for user in list format</li>
                    </ul>
                    <hr />
                </section>
                <section id="userProjects">
                    <div>Current Projects</div>
                    <ul>
                        <li>display list of current projects working on</li>
                    </ul>
                    <div>Requested Projects</div>
                    <ul>
                        <li>display list of projects applied for</li>
                    </ul>
                    <div>Completed Projects</div>
                    <ul>
                        <li>display list of projects participated on</li>
                    </ul>
                    <div>Managed Projects</div>
                    <ul>
                        <li>display list of current projects initiated</li>
                    </ul>
                    <hr />

                    <div>User Rating</div>
                    <hr />
                </section>
                <br />
            </>
        )
    }
}
export default Profile;