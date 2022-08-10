import React, { Component } from 'react';
import DateHelper from "./DateHelper.js";
export default function CalendarHead(props){
    return(
        <>
        <h2><i className="ico timesheet"></i>TimeSheet</h2>
        <div className="grey-box-wrap">
            <div className="top">
                <a onClick={props.changeStateDateMinus} className="prev"><i className="zmdi zmdi-chevron-left"></i>previous month</a>
                <span className="center">{DateHelper.getMonthName(props.currDate)} {props.currDate.getFullYear()}</span>
                <a className="next" onClick={props.changeStateDatePlus}>next month<i className="zmdi zmdi-chevron-right"></i></a>
            </div>
            <div className="bottom">

            </div>
        </div>
        </>
    )
}