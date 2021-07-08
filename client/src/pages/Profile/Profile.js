import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import ReactStars from "react-stars";
import UserContext from "../../utils/UserContext";
import API from "../../utils/API";
import "./Profile.css";

function Profile() {
    const { user } = useContext(UserContext);
    const [stars, setStars] = useState([]);
    const [avgRating, setAvgRating] = useState([]);
    const [users, setUsers] = useState();
    // const [userProjects, setProjects] = useState([]);

    useEffect(() => {
        API.getUsers(users)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err));
    }, [])

    // useEffect(() => {
    //     API.getProjects(userProjects)
    //         .then(res => setProjects(res.data))
    //         .catch(err => console.log(err));
    // }, [])

    const ratingChanged = (newRating) => {
        let average = (arr) => Math.round(arr.reduce((a, b) => a + b) / arr.length);
        let currentStars = stars;
        currentStars.push(newRating);
        console.log(currentStars);
        let newAvgRating = average(currentStars);
        setAvgRating(newAvgRating);
        setStars(currentStars);

        console.log(newRating)
        Axios.put('/api/users/:id', { newRating })
    };

    const renderProjects = () => {
        if (user) {
            const projects = user.projects.reduce((listProject, project) => {
                projects.find({ _id: projects._id })
                if (project._creator === user.id) { listProject.push(<li key={project._id}>{project.title}</li>) }
                return listProject
            }, [])
            return projects
        }
        return 'loading';
    };


    return (
        <>
            <br />
            <br />
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
                    {user && user.projects ? user.projects.map((data, _id) => {
                        return <li key={data._id}>{data.title}</li>
                    }) : 'loading'}
                </ul>
                <div className="set"><strong>Managed Projects</strong></div>
                <ul className="list">
                    {renderProjects}
                </ul>
                <hr />
                <div className="star">
                </div>

                <div className="set userRating"><strong>User Rating</strong></div>
                <div id="stars">
                    {<ReactStars className="starString"
                        count={5}
                        onChange={ratingChanged}
                        size={35}
                        edit={true}
                    />}
                </div>
                <p className="starStats">{user && user.firstName} has {avgRating} stars!</p>
                <hr />
            </section>
            <br />
        </>
    )
}

export default Profile;