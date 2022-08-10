import React from 'react';
import DateHelper from "./DateHelper.js"


export default function WeekHelperPrevious(props) {

    let EndDayOfPreviousWeek = new Date(props.HelperPreviousDate);

    EndDayOfPreviousWeek.setDate(EndDayOfPreviousWeek.getDate() - 1);

    let EndDate = DateHelper.getLastDayOfTheWeek(EndDayOfPreviousWeek);

    let StartDayOfPreviousWeek = DateHelper.getFirstDayOfTheWeek(EndDate);

    var ArrayOfPreviousWeek = DateHelper.getDatesFromRange(StartDayOfPreviousWeek, EndDayOfPreviousWeek);

    function SendValueToFetch(e){
        let FetchValue = e.target.textContent;
        {props.GetActivitiesByDate(FetchValue)}
    }




    return (

        ArrayOfPreviousWeek.map((singleDay) => (
            <li className="last" key = {singleDay}>
                <a>
                    <b key={singleDay} onClick={SendValueToFetch}>{singleDay.toISOString().slice(0, 10)}</b>
                    <i></i>
                    <span></span>
                </a>
            </li>
        ))
    )
}