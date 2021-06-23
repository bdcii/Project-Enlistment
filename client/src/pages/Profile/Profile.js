import React from "react";
import "./Profile.css";

function Profile() {
    return (
        <>
            <hr />
            <h2>Developer Profile</h2>
            <div className="fn">First Name - login info</div>
            <div className="ln">Last Name - login info</div>
            <div className="email">Email - login info</div>
            <div>GitHub</div>
            <div>LinkedIn</div>
            <hr/>

            <div>Technologies</div>
            <div>Soft Skills</div>
            <hr />

            <div>Current Projects</div>
            <div>Requested Projects</div>
            <div>Completed Projects</div>
            <div>Managed Projects</div>
            <hr />

            <div>User Rating</div>
            <hr />
            <br />
        </>
    )
}

export default Profile;