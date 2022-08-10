import React from 'react';
import { useState, useEffect } from "react"
export default function ProjectPopup(props) {
    const [newProject, SetNewProject] = useState('');

    const [clients, SetClients] = useState([]);


    function GetClients() {
        useEffect(() => {
            const url = 'https://localhost:7137/api/Client/all';

            fetch(url, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(clientsFromServer => {
                   
                    SetClients(clientsFromServer);
                })
                .catch((error) => {
                    
                    alert(error);
                })
        }, []);
    }
    function HandleName(e) {
        SetNewProject({
            ...newProject,
            "ProjectName": e.target.value,
        });
    }
    function HandleDescription(e) {
        SetNewProject({
            ...newProject,
            "Description": e.target.value,
        });
    }
    function HandleClient(e) {
        SetNewProject({
            ...newProject,
            "ClientName": e.target.value,
        });
    }
    function HandleLead(e) {
        SetNewProject({
            ...newProject,
            "ProjectLead": e.target.value,
        });
    }

    return (
        <div className="ProjectPopup">
            <h2>Create new project</h2>
            <div className="ForExitProjectPopup" onClick={props.CloseProjectPopup}></div>
            <h3>Project name:</h3>
            <input value={newProject.ProjectName} onChange={HandleName}></input>
            <h3>Description:</h3>
            <input value={newProject.Description} onChange={HandleDescription}></input>
            <h3>Customer:</h3>
            <select value={newProject.ClientName} onChange={HandleClient}>
                <option>Select Customer:</option>
                {GetClients()}
                {RenderClients()}
            </select>
            <h3>Lead:</h3>
            <select value={newProject.ProjectLead} onChange={HandleLead}>
                <option>Select Lead:</option>
                {props.GetTeamMembers()}
                {props.RenderLeads()}
            </select>

            <button onClick={event => props.CreateProject(newProject)} >Save</button>
        </div>
    )
    function RenderClients() {
        return (
            <>
                {clients.map((pr) => (
                    <option key = {pr.id}>{pr.name}</option>
                ))}
            </>

        )
    }
}