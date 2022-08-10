import React, { Component } from 'react';
import { useState } from "react"

export default function DeletePopup(props) {

    const [categoryName, setCategoryName] = useState('');

    function handleChange(e) {
        setCategoryName({
            ...categoryName,

            "Name": e.target.value,

        });


    };

    return (
        <div>
            <div id="MojPopup">
                <h3>Obrisi kategoriju</h3>
                <div className="CategoryDeletePopupExit" onClick={props.ClosePopupCategoriesDelete}></div>
                <h4>Ime kategorije:</h4>
                <input value={categoryName.CountryName} onChange={handleChange}></input>


                <button onClick={event => props.handleDelete(categoryName)}>Sacuvaj </button>

            </div>
        </div>
    )
}