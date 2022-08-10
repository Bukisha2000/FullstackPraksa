import React, { Component } from 'react';
import { useState } from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import TeamMemberPopup from "./TeamMemberPopup"
import Collapsible from 'react-collapsible';


export default function TeamMember() {
  const initialFormData = Object.freeze({
  });
  // INITIALFORM DATA UMESTO [] KAO POCETNE VRENDOSTI STATE??
  // TO JE BIO RAZLOG DA SE GRESKA UKLONI, TJ DA NA PRVI KLIK SAUVAJ NE AZURIRA SE LISTA, DOK SE NA DRUGI AZURIRA?
  const [formData, setFormData] = useState(initialFormData);
  const [teamMembers, setTeamMembers] = useState([]);
  const [isPreviewShown, setPreviewShown] = useState(false);
  const [controlState, SetControlState] = useState(1);
  function renderPopup(e) {
    e.preventDefault();

    setPreviewShown(true);

  }
  const handleChangeUsername = (e) => {
    setFormData({
      ...formData,
      Username: e.target.value,
    });
  };
  const handleChangeEmail = (e) => {
    setFormData({
      ...formData,
      Email: e.target.value,
    });
  };
  const handleChangeTeamMemberName = (e) => {
    setFormData({
      ...formData,
      TeamMemberName: e.target.value,
    });
  };
  const handleChangeHoursPerWeek = (e) => {
    setFormData({
      ...formData,
      HoursPerWeek: e.target.value,
    });
  };

  const handleChangeStatusFalse = (e) => {

    setFormData({
      ...formData,
      Status: false
    });
  };
  const handleChangeStatusTrue = (e) => {

    setFormData({
      ...formData,
      Status: true
    });
  };
  const handleChangeRoleAdmin = (e) => {
    setFormData({
      ...formData,
      Role: "Admin"
    });
  }
  const handleChangeRoleWorker = (e) => {
    setFormData({
      ...formData,
      Role: "Worker"
    });
  }
  function handleDeleteButton(e) {
 
    const deletedMember = {
      id: e.target.id
    }
    const url = `https://localhost:7137/api/TeamMember/${e.target.id}`;



    fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deletedMember)
    })
      .then(response => response.json())
      .then(responseFromServer => {

        SetControlState(controlState + 1);

      })
      .catch((error) => {
       
        alert(error);
      })

  }

  const handleSubmit = (e) => {
    const changeTeamMember = {
      id: e.target.id,
      Username: formData.Username,
      Email: formData.Email,
      TeamMemberName: formData.TeamMemberName,
      HoursPerWeek: formData.HoursPerWeek,
      Role: formData.Role,
      Status: formData.Status
    }
    if (changeTeamMember.Username == undefined) {
      changeTeamMember.Username = "";
    }
    if (changeTeamMember.Email == undefined) {
      changeTeamMember.Email = ""
    }
    if (changeTeamMember.TeamMemberName == undefined) {
      changeTeamMember.TeamMemberName = ""
    }
    if (changeTeamMember.HoursPerWeek == undefined) {
      changeTeamMember.HoursPerWeek = 0;
    }
    if (changeTeamMember.Role == undefined) {

      changeTeamMember.Role = ""
    }
    if (changeTeamMember.Status == undefined) {

      changeTeamMember.Status = false;
    }
    const url = `https://localhost:7137/api/TeamMember/${changeTeamMember.id}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(changeTeamMember)
    })
      .then(response => response.json())
      .then(responseFromServer => {

        SetControlState(controlState + 1);
      })
      .catch((error) => {
   
        alert(error);
      })

  };
  function CreateTeamMember(num) {

    const url = "https://localhost:7137/api/TeamMember";

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

  function GetTeamMembers() {
    useEffect(() => {
      const url = 'https://localhost:7137/api/TeamMember/all';

      fetch(url, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(teamMembersFromServer => {

          setTeamMembers(teamMembersFromServer);
        })
        .catch((error) => {
     
          alert(error);
        })
    }, [controlState])
  };

  function ShutDownPopup() {
    setPreviewShown(false);
  }


  return (

    <div className="wrapper">


      <section className="content2">
        <h2><i className="ico team-member"></i>Team members</h2>
        <div className="grey-box-wrap reports ico-member">

          <a className="link new-member-popup" onClick={renderPopup}> Create new member</a>

        </div>


        <div className="accordion-wrap">
          {GetTeamMembers()}
          {RenderTeamMembers()}

        </div>

      </section>
      {isPreviewShown && <TeamMemberPopup CreateTeamMember={CreateTeamMember} ShutDownPopup={ShutDownPopup} />}
    </div>


  )
  function RenderTeamMembers() {
    return (

      teamMembers.map((tm) => (
        <div className="item" key = {tm.id}>
          <div className="heading">
            <Collapsible trigger={tm.teamMemberName}>
              <div className="collapsedOpenMenu">
                <div className="CollapsedFloat">
                  <h2>Name</h2>
                  <input value={formData.TeamMemberName} onChange={handleChangeTeamMemberName}></input>
                  <h2>Hours per week</h2>
                  <input value={formData.HoursPerWeek} onChange={handleChangeHoursPerWeek}></input>
                </div>
                <div className="CollapsedFloat">
                  <h2>Username</h2>
                  <input value={formData.Username} onChange={handleChangeUsername}></input>
                  <h2>Email</h2>
                  <input value={formData.Email} onChange={handleChangeEmail}></input>
                </div>
                <div className="CollapsedRest">
                  <h3>Status</h3>
                  <span>Inactive</span><input type="radio" name="status" onChange={handleChangeStatusFalse}></input>
                  <span>Active</span><input type="radio" name="status" onChange={handleChangeStatusTrue}></input>
                  <h3>Role</h3>
                  <span>Admin</span><input type="radio" name="role" onChange={handleChangeRoleAdmin}></input>
                  <span>Worker</span><input type="radio" name="role" onChange={handleChangeRoleWorker}></input>

                </div>
                <button className="SaveButtonTM" onClick={handleSubmit} id={tm.id}>Save</button>
                <button className="DeleteButtonTM" onClick={handleDeleteButton} id={tm.id}>Delete</button>
              </div>
            </Collapsible>
            <i>+</i>
          </div>
        </div>
      ))


    )
  }
}