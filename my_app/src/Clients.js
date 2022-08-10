import React, { Component, useEffect, useState } from 'react';
import ClientPopup from "./ClientPopup"
import Collapsible from 'react-collapsible';
import InputDate from "./InputDate"
export default function Clients() {
    const initialFormData = Object.freeze({
    });
    const [clients, SetClients] = useState([]);
    const [formData, setFormData] = useState(initialFormData);
    const [isShown, SetShown] = useState(false);
    const [country, SetCountries] = useState([]);
    const [controlState, SetControlState] = useState(0);
    const [popupState, setPoputState] = useState(0)


    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    function AddPopup() {
        setPoputState(popupState + 1);
    }
    function handleNameClient(e) {

        var nesto = e.target.value;
        GetClientName(nesto);



    }
    function OneLetterProject(e) {

        var nesto = e.target.innerHTML;
        GetClientName(nesto);
    }
    function GetClientName(nesto) {
        var url;
        var konacno;
        if (nesto != "") {
            url = `https://localhost:7137/api/Client/name?ClientN=`;
            konacno = url + nesto;
        } else {
            konacno = "https://localhost:7137/api/Client/all"
        }






        fetch(konacno, {
            method: 'GET',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(response => response.json())
            .then(responseFromServer => {
                SetClients(responseFromServer);


            })
            .catch((error) => {
               
                alert(error);

            })
    }
    function HandleOpenPopup(e) {
        e.preventDefault();
        SetShown(true);
    }
    function HandleExitClientPopup() {
        SetShown(false);
    }
    function HandleName(e) {
        setFormData({
            ...formData,
            Name: e.target.value,
        });
    }
    function HandleAddress(e) {
        setFormData({
            ...formData,
            Address: e.target.value,
        });
    }
    function HandleCity(e) {
        setFormData({
            ...formData,
            City: e.target.value,
        });
    }
    function HandleCountry(e) {
      
        setFormData({
            ...formData,
            CountryID: e.target.value,
        });
    }
    function HandlePostal(e) {
        setFormData({
            ...formData,
            PostalCode: e.target.value,
        });
    }
    function HandleSavingChanges(e) {
        const changeClients = {
            id: e.target.id,
            Name: formData.Name,
            Address: formData.Address,
            City: formData.City,
            PostalCode: formData.PostalCode,
            CountryID: formData.CountryID
        }
        if (changeClients.Name == undefined) {
            changeClients.Name = "";
        }
        if (changeClients.Address == false) {
            changeClients.Address = ""
        }
        if (changeClients.City == undefined) {
            changeClients.City = ""
        }
        if (changeClients.PostalCode == undefined) {
            changeClients.PostalCode = 0;
        }
        if (changeClients.CountryID == undefined) {

            changeClients.CountryID = ""
        }

        const url = `https://localhost:7137/api/Client/${changeClients.id}`;
       
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changeClients)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                SetControlState(controlState + 1);
            })
            .catch((error) => {
               
                alert(error);
            })
    }
    function GetCountries() {
        useEffect(() => {
            const url = 'https://localhost:7137/api/Country/all';

            fetch(url, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(countriesFromServer => {

                    SetCountries(countriesFromServer);

                })
                .catch((error) => {
                  
                    alert(error);
                })
        }, []);
    }

    function HandleDeleteClient(e) {
        const deletedClient = {
            id: e.target.id
        }
        const url = `https://localhost:7137/api/Client/${e.target.id}`;



        fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deletedClient)
        })
            .then(response => response.json())
            .then(responseFromServer => {

                SetControlState(controlState + 1);

            })
            .catch((error) => {
             
                alert(error);
            })
    }

    function GetOtherCountries() {

        const url = 'https://localhost:7137/api/Country/all';

        fetch(url, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(countriesFromServer => {

                SetCountries(countriesFromServer);
                SetControlState(controlState + 1);

            })
            .catch((error) => {
               
                alert(error);
            })
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
        }, [controlState]);
    }
    function RenderLetters() {
        return (
            letters.map((oneLet) => (
                <li key = {oneLet}>
                    <a onClick={OneLetterProject}>{oneLet}</a>
                </li>
            ))
        )
    }
    function RenderClients() {
        return (

            clients.map((client) => (
                <div className="item" key={client.id}>

                    <div className="heading">
                        <Collapsible trigger={client.name}>

                            <div className="collapsedOpenMenuClients" id={client.id}>
                                <div className="FirstCollapsed">
                                    <h2>Client name: </h2>
                                    <input onChange={HandleName} value={formData.Name}></input>
                                    <h2>Address: </h2>
                                    <input onChange={HandleAddress} value={formData.Address}></input>
                                    <h2>City</h2>
                                    <input onChange={HandleCity} value={formData.City}></input>
                                </div>
                                <div className="SecondCollapsed">
                                    <h2>Zip/Postal code:</h2>
                                    <input onChange={HandlePostal} value={formData.PostalCode}></input>
                                    <h2>Country:</h2>
                                    <select value={formData.Country} onChange={HandleCountry}>

                                        <option>Select country</option>
                                        {RenderCountries()}

                                    </select>
                                </div>
                                <div className="ThirdCollapsed">
                                    <button onClick={HandleSavingChanges} id={client.id}>Save</button>
                                    <button onClick={HandleDeleteClient} id={client.id}>Delete</button>
                                </div>
                            </div>
                        </Collapsible>
                        <i>+</i>
                    </div>
                </div>
            )

            )
        )
    }
    function RenderCountries() {

        return (
            country.map((cnt) => (
                <option key={cnt.id} value={cnt.id}>{cnt.countryName}</option>
            ))
        )
    }

    return (

        <>
            <div className="wrapper">
                {GetCountries()}
                <section className="content2">
                    <h2><i className="ico clients"></i>Clients</h2>
                    <div className="grey-box-wrap reports">
                        <a href="#new-member" className="link new-member-popup" onClick={HandleOpenPopup}>Create new client</a>
                        <div className="search-page">
                            <input type="search" name="search-clients" className="in-search" onChange={handleNameClient} />
                        </div>
                    </div>
                    <div className="new-member-wrap">

                    </div>
                    <div className="alpha">
                        <ul>
                            {RenderLetters()};
					</ul>
                    </div>
                    <div className="accordion-wrap clients">
                        {GetClients()}
                        {RenderClients()}


                    </div>
                    {isShown && <ClientPopup HandleExitClientPopup={HandleExitClientPopup} GetOtherCountries={GetOtherCountries} RenderCountries={RenderCountries} AddPopup={AddPopup}
                        GetCountries={GetCountries} />}

                </section>

            </div>
        </>

    )
}