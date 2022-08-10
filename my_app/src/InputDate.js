import React from 'react';
import SingleActivity from './SingleActivity';
import DateHelper from "./DateHelper.js";
import { useState } from "react"
import WeekHelper from './WeekHelper';
import WeekHelperPrevious from './WeekHelperPrevious';
export default function InputDate(props) {

	const [initialDates, SetInitialDates] = useState(true);
	const [nextWeekDate, SetNextWeekDate] = useState(false);
	const [previousWeekDate, SetPreviousWeekDate] = useState(false);
	let HoursCounterActivity = 0;
	for (let i = 0; i < props.listActivities.length; i++) {
		HoursCounterActivity += props.listActivities[i].time;
	}



	let StartingDate = new Date(props.StartingDate);

	let StartingDayOfWeek = DateHelper.getFirstDayOfTheWeek(StartingDate);

	let LastDayOfWeek = DateHelper.getLastDayOfTheWeek(StartingDate);

	let Week = DateHelper.getDatesFromRange(StartingDayOfWeek, LastDayOfWeek);

	const [dayOfWeek, SetDayOfWeek] = useState(LastDayOfWeek);
	function RenderArrayOfWeek() {
		return (
			Week.map((singleDay) => (
				<li className="last" key={singleDay}>
					<a>
						<b onClick={FetchValue}>{singleDay.toISOString().slice(0, 10)}</b>
						<i></i>
						<span></span>
					</a>
				</li>
			))
		)
	}
	function FetchValue(e){
		let fetchValue = e.target.textContent;
		props.GetActivitiesByDate(fetchValue)
	}
	const [HelperDate, SetHelperDate] = useState('');
	const [HelperPreviousDate, SetPreviousDate] = useState('');
	function RenderNextWeek(e) {
		SetHelperDate(e.target.parentElement.parentElement.lastElementChild.lastChild.lastChild.textContent);
		SetInitialDates(false);
		SetPreviousWeekDate(false);
		SetNextWeekDate(true);
	}
	function RenderPreviousWeek(e) {
		SetPreviousDate(e.target.parentElement.parentElement.lastElementChild.lastChild.firstChild.textContent);
		SetInitialDates(false);
		SetNextWeekDate(false);
		SetPreviousWeekDate(true);
	}
	





	return (
		<div className="wrapper">
			<section className="content">
				<h2><i className="ico timesheet"></i>TimeSheet</h2>
				<div className="grey-box-wrap">
					<div className="top">
						<a onClick={RenderPreviousWeek} className="prev"><i className="zmdi zmdi-chevron-left" ></i>previous week</a>
						<span className="center">{props.StartingDate}</span>
						<a className="next" onClick={RenderNextWeek}>next week<i className="zmdi zmdi-chevron-right"></i></a>
					</div>
					<div className="bottom">
						<ul className="days">
							{initialDates && RenderArrayOfWeek()}
							{nextWeekDate && <WeekHelper dayOfWeek={dayOfWeek} HelperDate={HelperDate}  GetActivitiesByDate={props.GetActivitiesByDate}/>}
							{previousWeekDate && <WeekHelperPrevious HelperPreviousDate={HelperPreviousDate}  GetActivitiesByDate={props.GetActivitiesByDate}/>}
						</ul>
					</div>
				</div>
				<table className="default-table">
					<tr>
						<th>
							Client <em>*</em>
						</th>
						<th>
							Project <em>*</em>
						</th>
						<th>
							Category <em>*</em>
						</th>
						<th>Description</th>
						<th className="small">
							Time <em>*</em>
						</th>
						<th className="small">Overtime</th>
					</tr>
					{props.ControlNumber && <SingleActivity listActivities={props.listActivities} />}

				</table>
				<div className="total">
					<a onClick={props.HandleBackToCalendar}><i></i>back to monthly view</a>
					<span>Total hours: <em>{HoursCounterActivity}</em></span>
				</div>
			</section>
		</div>

	)
}