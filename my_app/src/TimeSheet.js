import React, { Component } from 'react';
import Days from "./days"
import { useState, useEffect } from "react"
import Calendar from "./calendar"
import InputDate from "./InputDate"
import DateHelper from "./DateHelper.js";
import CalendarHead from "./CalendarHead"
export default function TimeSheet() {

    const [listActivities, SetListActivities] = useState([]);
    const [ControlNumber, SetControlNumber] = useState(false);
    const [StartingDate, SetStartingDate] = useState();
    const [positive, SetPositive] = useState(0);
    const [negative, SetNegative] = useState(0);
    const [propNumber, SetPropNumber] = useState(0);
    const [showCalendar, SetShowCalendar] = useState(true);
    const [showActivities, SetShowActivities] = useState(false);
    var Year = 2022;
    var Month = 6;
    var Day = 10;
    let currentDate = new Date(Year, Month, Day);
    const [currDate, SetCurDate] = useState(currentDate = new Date(Year, Month, Day))

    
    function GetActivitiesByDate(StartDate) {
        SetStartingDate(StartDate);
        const BaseURL = 'https://localhost:7137/api/Activity/date?StartDate=';
        const FinalURL = BaseURL + StartDate;

        fetch(FinalURL, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(activitiesFromBackend => {

                SetListActivities(activitiesFromBackend);
                console.log(activitiesFromBackend);
            })
            .catch((error) => {
               alert(error);
            
            })
        SetControlNumber(true);

    };





    function HandleBackToCalendar() {
        SetShowActivities(false);
        SetShowCalendar(true);
    }
    function ChangeCalendarActivities() {
        SetShowCalendar(false);
        SetShowActivities(true);
    }
    // FUNCTIONS FOR CHANGE MONTH
    function changeStateDatePlus() {
        SetPositive(positive + 1);
        SetPropNumber(propNumber + 1);

    }
    function changeStateDateMinus() {
        SetNegative(negative + 1);
        SetPropNumber(propNumber + 1);
    }



    useEffect(() => {

        SetCurDate(currentDate = new Date(Year, Month - negative + positive, Day));
    }, [positive]);
    useEffect(() => {

        SetCurDate(currentDate = new Date(Year, Month + positive - negative, Day));
    }, [negative]);



    return (

        <div className="wrapper">
            <section className="content">
                {showCalendar && <CalendarHead changeStateDateMinus={changeStateDateMinus} currDate={currDate} changeStateDatePlus={changeStateDatePlus} />}
                {showCalendar && <Calendar currDate={currDate} propNumber={propNumber} ChangeCalendarActivities={ChangeCalendarActivities} GetActivitiesByDate={GetActivitiesByDate} />}
                {showActivities && <InputDate HandleBackToCalendar={HandleBackToCalendar} listActivities={listActivities} ControlNumber={ControlNumber }  GetActivitiesByDate={GetActivitiesByDate}
                    StartingDate={StartingDate} />}
            </section>
        </div>
    )

}