import React from 'react';
import {useState} from "react"

export default function Days(props) {

function PassDateToParent(e){

	{props.ChangeCalendarActivities()}

	
	{props.GetActivitiesByDate(e.target.parentElement.previousElementSibling.firstChild.innerHTML)}
	
}

	return (

		props.dates.map((date) => (

			<td key ={date}>

				<div className="date">
					<span>{date.toISOString().slice(0,10)}</span>
				</div>
				<div className="hours">
					<a  className="anchorDate"  onClick={PassDateToParent}>

						Hours: <p className="SpanForDays">{props.hours.map((hour) => (
						hour.startDate.slice(0, 10) === date.toISOString().slice(0, 10) ? hour.time : ""
					))}</p>
					</a>
				</div>
			</td>
		))
	)
}