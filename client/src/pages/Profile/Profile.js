import React from "react";
import "./Profile.css";
// import { User } from "../../../../models/User";

function Profile() {

    return (
        <>
            <hr />
            <h2>Developer Profile</h2>
            <section className="profile">
                {/* <div className="fn">{User.firstName}</div> */}
                <div className="ln">Last Name - login info</div>
                <div className="email">Email - login info</div>
                <div>GitHub</div>
                <div>LinkedIn</div>
                <hr />

                <div>Technologies</div>
                <div>Soft Skills</div>
                <hr />
            </section>
            <section className="projects">
                <div>Current Projects</div>
                <div>Requested Projects</div>
                <div>Completed Projects</div>
                <div>Managed Projects</div>
                <hr />

                <div>User Rating</div>
                <hr />
            </section>
            <br />
        </>
    )
}

export default Profile;