import React, { useState } from 'react';
import { useEffect } from "react"
import DateHelper from "./DateHelper.js";
import Days from "./days"
export default function Calendar(props) {

	const [hours, SetNizHours] = useState([]);
	function HandleShowingActivities() {

	}
	function RenderCalendar() {
		let startDate = DateHelper.getFirstDayOfTheWeek(DateHelper.getFirstDayOfTheMonth(props.currDate));
		let endDate = DateHelper.getLastDayOfTheWeek(DateHelper.getLastDayOfTheMonth(props.currDate));
		const dates = DateHelper.getDatesFromRange(startDate, endDate);
		var StartDateParameter = dates[0].toISOString().slice(0, 10);
		var EndDateParameter = dates[34].toISOString().slice(0, 10);
		useEffect(() => {


			const initialURL = 'https://localhost:7137/api/Activity/between?StartDate=';
			var KonacanURL = initialURL + StartDateParameter + '&EndDate=' + EndDateParameter;
			fetch(KonacanURL, {
				method: 'GET'
			})
				.then(response => response.json())
				.then(singleHour => {
					SetNizHours(singleHour);


				})
				.catch((error) => {
					alert(error);

				})
		}, [props.currDate]);

		for (let i = 0; i < Object.keys(hours).length; i++) {
			for (let j = i + 1; j < Object.keys(hours).length; j++) {
				if (hours[i].startDate == hours[j].startDate) {
					hours[i].time += hours[j].time;
					hours[j].time = null;
				}
			}
		}

		return (
			<Days dates={dates} hours={hours} HandleShowingActivities={HandleShowingActivities} ChangeCalendarActivities={props.ChangeCalendarActivities}
				GetActivitiesByDate={props.GetActivitiesByDate} />
		)
	}
	var TotalHoursInMonth = 0;
	for (let i = 0; i < Object.keys(hours).length; i++) {
		TotalHoursInMonth += hours[i].time;
	}
	return (
		<>
			<table className="month-table">
				<tr className="head">
					<th><span>monday</span></th>
					<th>tuesday</th>
					<th>wednesday</th>
					<th>thursday</th>
					<th>friday</th>
					<th>saturday</th>
					<th>sunday</th>
				</tr>

				<tr>

					{RenderCalendar()}


				</tr>
			</table>
			<div className="total">
				<span>Total hours: <em>{TotalHoursInMonth}</em></span>
			</div>
		</>
	)
}
