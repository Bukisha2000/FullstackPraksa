import React, { Component } from 'react';
import { useState } from "react"

export default function Popup(props) {

    const [categoryState, SetCategoryState] = useState('');

    function handleChange(e) {
        SetCategoryState({
            ...categoryState,

            "Name": e.target.value,

        });


    };


    return (
        <div>
            <div id="MojPopup">
                <h3>Napravi novu kategoriju</h3>
                <div className="CategoryDeletePopupExit" onClick={props.ClosePopupCategories}></div>
                <h4>Ime kategorije:</h4>
                <input value={categoryState.CountryName} onChange={handleChange}></input>


                <button onClick={() => { props.CreateCategory(categoryState); }}>Sacuvaj </button>

            </div>
        </div>
    )
}