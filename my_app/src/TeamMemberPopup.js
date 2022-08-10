import React from 'react';
import { useState } from "react"

export default function TeamMemberPopup(props) {
    const [teamMembers, setTeamMembers] = useState('');

    function handleTMName(e) {
        setTeamMembers({
            ...teamMembers,
            "TeamMemberName": e.target.value,
        });
    };
    function handleHours(e) {
        var something = e.target.value;
        setTeamMembers({
            ...teamMembers,
            "HoursPerWeek": parseInt(something)
        });
    };
    function handleUsername(e) {
        setTeamMembers({
            ...teamMembers,
            "Username": e.target.value,
        });
    };
    function handleEmail(e) {
        setTeamMembers({
            ...teamMembers,
            "Email": e.target.value,
        });
    };
    function handleTrue(e) {
        setTeamMembers({
            ...teamMembers,
            "Status": true,
        });
    };
    function handleFalse(e) {
        setTeamMembers({
            ...teamMembers,
            "Status": false,
        });
    };
    function handleAdmin(e) {
        setTeamMembers({
            ...teamMembers,
            "Role": "Admin",
        });
    };
    function handleWorker(e) {
        setTeamMembers({
            ...teamMembers,
            "Role": "Worker",
        });
    };

    return (
        <div id="TMPopup">
            <h2>Create new team member</h2>
            <div className="forExit" onClick={props.ShutDownPopup}></div>

            <p>Name:</p>
            <input value={teamMembers.TeamMemberName} onChange={handleTMName}></input>
            <p>Hours per week:</p>
            <input value={teamMembers.CountryName} onChange={handleHours}></input>
            <p>Username:</p>
            <input value={teamMembers.Username} onChange={handleUsername}></input>
            <p>Email:</p>
            <input value={teamMembers.Email} onChange={handleEmail}></input>

            <div id="zaFlex">
                <p>Status</p>
                <p>Inactive</p>
                <input type="radio" name="status" value={teamMembers.Email} onChange={handleFalse}></input>
                <p>Active</p>
                <input type="radio" name="status" value={teamMembers.Email} onChange={handleTrue}></input>
            </div>
            <div id="zaFlex2">
                <p>Role:</p>
                <p>Admin:</p>
                <input type="radio" name="role" value={teamMembers.Role} onChange={handleAdmin}></input>
                <p>Worker:</p>
                <input type="radio" name="role" value={teamMembers.Role} onChange={handleWorker}></input>
            </div>

            <button onClick={event => props.CreateTeamMember(teamMembers)}>Invite team member</button>
        </div>
    )
}