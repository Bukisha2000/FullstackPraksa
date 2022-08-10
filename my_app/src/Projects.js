import React, { Component } from 'react';
import { useState } from "react"
import { useEffect } from "react"
import ProjectPopup from "./ProjectPopup"
import Collapsible from 'react-collapsible';
export default function Projects() {

  const initialFormData = Object.freeze({
  });
  const [formData, setFormData] = useState(initialFormData);
  const [projects, SetProjects] = useState([]);
  const [preview, setPreviewShown] = useState(false);
  const [controlState, SetControlState] = useState(1);

  const [teamMembers, SetTeamMembers] = useState([]);
  const [clients, SetClients] = useState([]);
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function GetTeamMembers() {

    useEffect(() => {
      const url = 'https://localhost:7137/api/TeamMember/all';

      fetch(url, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(teamMembersFromServer => {

          SetTeamMembers(teamMembersFromServer);

        })
        .catch((error) => {
       
          alert(error);
        })
    }, [])
  };


  function CreateProject(num) {
  
    const url = "https://localhost:7137/api/Project";

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(num)
    })
      .then(response => response.json())
      .then(responseFromServer => {
       
        SetControlState(controlState + 1);


      })
      .catch((error) => {
       
        alert(error);
      })

  };

  function GetProjects() {

    useEffect(() => {

      const url = 'https://localhost:7137/api/Project/all';

      fetch(url, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(projectsFromServer => {

          SetProjects(projectsFromServer);

        })
        .catch((error) => {
         
          alert(error);
        })
    }, [controlState]);
  }
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
  function RenderProjectPopup(e) {
    e.preventDefault();
    setPreviewShown(true);
  }
  function CloseProjectPopup() {
    setPreviewShown(false);
  }
  function handleNameProject(e) {
    var nesto = e.target.value;
    GetProjectName(nesto);
  }
  function OneLetterProject(e) {
    var nesto = e.target.innerHTML;
    GetProjectName(nesto);
  }
  function GetProjectName(nesto) {
    var url;
    var konacno;
    if (nesto != "") {
      url = `https://localhost:7137/api/Project/name?ProjectN=`;
      konacno = url + nesto;
    } else {
      konacno = "https://localhost:7137/api/Project/all"
    }

    fetch(konacno, {
      method: 'GET',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseFromServer => {
        SetProjects(responseFromServer);
      })
      .catch((error) => {
        alert(error);

      })
  }

  function HandleSaveButton(e) {
    const changeProject = {
      id: e.target.id,
      ProjectName: formData.ProjectName,
      Description: formData.Description,
      ProjectLead: formData.ProjectLead,
      ClientName: formData.ClientName,
      Status: formData.Status
    }
    if (changeProject.ProjectName == undefined) {
      changeProject.ProjectName = "";
    }
    if (changeProject.Status == undefined) {
      changeProject.Status = false;
    }
    if (changeProject.ClientName == undefined) {
      changeProject.ClientName = ""
    }
    if (changeProject.ProjectLead == undefined) {
      changeProject.ProjectLead = ""
    }
    if (changeProject.Description == undefined) {

      changeProject.Description = ""
    }
   

    const url = `https://localhost:7137/api/Project/${changeProject.id}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(changeProject)
    })
      .then(response => response.json())
      .then(responseFromServer => {
        SetControlState(controlState + 1);

      })
      .catch((error) => {
       
        alert(error);
      })
  }
  function HandleProjectName(e) {
    setFormData({
      ...formData,
      ProjectName: e.target.value,
    });
  }
  function HandleDescription(e) {
    setFormData({
      ...formData,
      Description: e.target.value,
    });
  }
  function HandleProjectLead(e) {
    setFormData({
      ...formData,
      ProjectLead: e.target.value,
    });
  }
  function HandleClientName(e) {
    setFormData({
      ...formData,
      ClientName: e.target.value,
    });
  }

  function HandleActive() {
    setFormData({
      ...formData,
      Status: true
    });
  }
  function HandleFalse() {
    setFormData({
      ...formData,
      Status: false
    });
  }


  function HandleDeleteProject(e) {
    const deletedProject = {
      id: e.target.id
    }
    const url = `https://localhost:7137/api/Project/${e.target.id}`;



    fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deletedProject)
    })
      .then(response => response.json())
      .then(responseFromServer => {

        SetControlState(controlState + 1);

      })
      .catch((error) => {
       
        alert(error);
      })
  }
  return (

    <div className="wrapper">
      {GetTeamMembers()}
      {GetClients()};
      <section className="content2">
        <h2><i className="ico projects"></i>Projects</h2>
        <div className="grey-box-wrap reports">
          <a href="#new-member" className="link new-member-popup" onClick={RenderProjectPopup}>Create new project</a>
          <div className="search-page">
            <input type="search" name="search-clients" className="in-search" onChange={handleNameProject} />
          </div>
        </div>
        <div className="new-member-wrap">
          <div id="new-member" className="new-member-inner">


          </div>
        </div>
        <div className="alpha">
          <ul>
            {RenderLetters()};
                </ul>
        </div>
        <div className="accordion-wrap projects">

          {GetProjects()}
          {RenderProjects()}


        </div>


      </section>
      {preview && <ProjectPopup CloseProjectPopup={CloseProjectPopup} CreateProject={CreateProject} GetTeamMembers={GetTeamMembers} RenderLeads={RenderLeads} />}
    </div>


  )

  function RenderProjects() {

    return (

      projects.map((proj) => (

        <div className="item" key = {proj.id}>

          <div className="heading">
            <Collapsible trigger={proj.projectName}>

              <div className="collapsedOpenMenu">
                <div className="CollapsedFloat">
                  <h2>Project name:</h2>
                  <input value={formData.ProjectName} onChange={HandleProjectName}></input>
                  <h2>Lead:</h2>
                  <select className="SelectProjecta" value={formData.ProjectLead} onChange={HandleProjectLead}>
                    <option>Select Lead:</option>
                    {RenderLeads()}
                  </select>
                </div>
                <div className="CollapsedFloat">
                  <h2>Description</h2>
                  <input value={formData.Description} onChange={HandleDescription}></input>
                </div>
                <div className="CollapsedRestProject">
                  <h2>Customer:</h2>
                  <select className="SelectClients" value={formData.ClientName} onChange={HandleClientName}>
                    <option>Select customer:</option>
                    {RenderClients()}
                  </select>
                  <div>
                    <span>Status: </span> <span>Active: </span><input type="radio" name="active" onChange={HandleActive}></input> <span>Inactive:</span><input type="radio" name="active" onChange={HandleFalse}></input>
                  </div>
                  <div className="ButtonsProject" >
                    <button onClick={HandleSaveButton} id={proj.id}>Save</button>
                    <button onClick={HandleDeleteProject} id={proj.id}>Delete</button>
                  </div>
                </div>
              </div>
            </Collapsible>
            <i>+</i>
          </div>
        </div>
      ))


    )
  }
  function RenderLeads() {
    return (
      teamMembers.map((tm) => (
        <option key={tm.id}>{tm.teamMemberName}</option>
      ))
    )
  }
  function RenderClients() {
    return (
      clients.map((client) => (
        <option key={client.id}>{client.name}</option>
      ))
    )
  }
  function RenderLetters() {
    return (
      letters.map((oneLet) => (
        <li>
          <a key = {oneLet} onClick={OneLetterProject}>{oneLet}</a>
        </li>
      ))
    )
  }
}