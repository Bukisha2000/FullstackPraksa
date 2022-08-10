import React, { Component } from 'react';
import { useState } from "react"
export default function ClientPopup(props) {
    const initialFormData = Object.freeze({
    });
    const [formData, setFormData] = useState(initialFormData);
  


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
    function CallFromParent() {
        { CreateClient() }
        props.GetOtherCountries();
    }
    function HandlePostal(e) {
        setFormData({
            ...formData,
            PostalCode: e.target.value,
        });
    }
    function CreateClient() {
        const changeClients = {
            Name: formData.Name,
            Address: formData.Address,
            City: formData.City,
            PostalCode: formData.PostalCode,
            CountryID: formData.CountryID
        }
        const url = "https://localhost:7137/api/Client";

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json,text/plain,*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(changeClients)
        })
            .then(response => response.json())
            .then(responseFromServer => {
                alert('success!');
            })
            .catch((error) => {
               
                alert(error);
            })
    }
    return (
        <div className="WrapperClientPopup">
            <div className="new-member-inner">
                <h2>Create new client</h2>
                <div className="ExitButtonClientPopup" onClick={props.HandleExitClientPopup}></div>
                <ul className="form">
                    <li>
                        <label>Client name:</label>
                        <input type="text" className="in-text" value={formData.Name} onChange={HandleName} />
                    </li>
                    <li>
                        <label>Address:</label>
                        <input type="text" className="in-text" value={formData.Address} onChange={HandleAddress} />
                    </li>
                    <li>
                        <label>City:</label>
                        <input type="text" className="in-text" value={formData.City} onChange={HandleCity} />
                    </li>
                    <li>
                        <label>Zip/Postal code:</label>
                        <input type="text" className="in-text" value={formData.PostalCode} onChange={HandlePostal} />
                    </li>
                    <li>
                        <label>Country:</label>
                        <select value={formData.Country} onChange={HandleCountry}>
                            <option>Select country</option>
                            {props.GetCountries()}
                            {props.RenderCountries()}
                        </select>
                    </li>
                </ul>
                <div className="buttons">
                    <div className="inner">
                        <a className="btn green" onClick={CallFromParent} >Save</a>
                    </div>
                </div>
            </div>
        </div>
    )
}