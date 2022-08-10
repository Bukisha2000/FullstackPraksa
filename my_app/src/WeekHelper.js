import React from 'react';
import DateHelper from "./DateHelper.js"
import { useState, useEffect } from "react"
export default function WeekHelper(props) {

    let StartingDayOfNextWeek = new Date(props.HelperDate);

    StartingDayOfNextWeek.setDate(StartingDayOfNextWeek.getDate() + 1);

    let StartDate = DateHelper.getFirstDayOfTheWeek(StartingDayOfNextWeek);

    let LastDayOfNextWeek = DateHelper.getLastDayOfTheWeek(StartingDayOfNextWeek);

    var ArrayOfNextWeek = DateHelper.getDatesFromRange(StartDate, LastDayOfNextWeek);

    function SendValueToFetch(e){
        let FetchValue = e.target.textContent;
        {props.GetActivitiesByDate(FetchValue)}
    }




    return (

        ArrayOfNextWeek.map((singleDay) => (
            <li className="last" key={singleDay}>
                <a>
                    <b key={singleDay} onClick={SendValueToFetch}>{singleDay.toISOString().slice(0, 10)}</b>
                    <i></i>
                    <span></span>
                </a>
            </li>
        ))
    )
}