import React, { Component } from 'react';
import { useState } from "react"
import { useEffect } from "react"
import Categories from "./Categories"



export default function Reports() {
	const [clients, SetClients] = useState([]);
	const [projects, SetProjects] = useState([]);
	const [teamMembers, setTeamMembers] = useState([]);
	const [categories, setCategories] = useState([]);
	const [formData, setFormData] = useState('');
	const [reports, SetReports] = useState([]);
	const [isShown, SetIsShown] = useState(false);

	function ResetTable() {
		SetIsShown(false);
	}
	function HandleProjectName(e) {
		setFormData({
			...formData,
			ProjectName: e.target.value,
		});
	}
	function HandleStartDate(e) {
		setFormData({
			...formData,
			StartDate: e.target.value,
		});
	}
	function HandleEndDate(e) {
		setFormData({
			...formData,
			EndDate: e.target.value,
		});
	}
	function HandleClientName(e) {

		setFormData({
			...formData,
			ClientName: e.target.value,
		});
	}
	function HandleTeamMemberName(e) {
		setFormData({
			...formData,
			TeamMemberName: e.target.value,
		});
	}
	function HandleCategoryName(e) {
		setFormData({
			...formData,
			CategoryName: e.target.value,
		});
	}


	function GetFinalReports() {
		var OperationsCounter = 0;
		var url = 'https://localhost:7137/api/Activity?';


		if (formData.StartDate != undefined & formData.StartDate != "") {
			if (OperationsCounter === 0) {
				url = url + 'StartDate=' + formData.StartDate;
				OperationsCounter++;
			} else {
				url = url + '&StartDate=' + formData.StartDate;
				OperationsCounter++;
			}
		}
		if (formData.EndDate != undefined && formData.EndDate != "") {
			if (OperationsCounter === 0) {
				OperationsCounter++;
				url = url + 'EndDate=' + formData.EndDate;
			} else {
				url = url + '&EndDate=' + formData.EndDate;
				OperationsCounter++;
			}
		}
		if (formData.CategoryName != undefined && formData.CategoryName != "All") {

			if (OperationsCounter === 0) {
				url = url + 'categoryName=' + formData.CategoryName;
				OperationsCounter++;
			} else {
				OperationsCounter++;
				url = url + '&categoryName=' + formData.CategoryName;
			}

		}
		if (formData.ClientName != undefined && formData.ClientName != "All") {

			if (OperationsCounter === 0) {
				url = url + 'clientName=' + formData.ClientName;
				OperationsCounter++;
			} else {
				OperationsCounter++;
				url = url + '&clientName=' + formData.ClientName;
			}

		}
		if (formData.TeamMemberName != undefined && formData.TeamMemberName != "All") {

			if (OperationsCounter === 0) {
				url = url + 'teamMemberName=' + formData.TeamMemberName;
				OperationsCounter++;
			} else {
				OperationsCounter++;
				url = url + '&teamMemberName=' + formData.TeamMemberName;
			}

		}
		if (formData.ProjectName != undefined && formData.ProjectName != "All") {

			if (OperationsCounter === 0) {
				url = url + 'projectName=' + formData.ProjectName;
				OperationsCounter++;
			} else {
				OperationsCounter++;
				url = url + '&projectName=' + formData.ProjectName;
			}

		}

	

		fetch(url, {
			method: 'GET'
		})
			.then(response => response.json())
			.then(reportsFromServer => {

				SetReports(reportsFromServer);

			})
			.catch((error) => {
				alert(error);
			})
		SetIsShown(true);

	}

	function GetCategories() {

		useEffect(() => {
			const url = 'https://localhost:7137/api/Category/all';

			fetch(url, {
				method: 'GET'
			})
				.then(response => response.json())
				.then(categoriesFromServer => {

					setCategories(categoriesFromServer);
				})
				.catch((error) => {
					
					alert(error);
				})
		}, []);
	}
	function GetProjects() {

		useEffect(() => {

			const url = 'https://localhost:7137/api/Project/all';

			fetch(url, {
				method: 'GET'
			})
				.then(response => response.json())
				.then(projectsFromServer => {

					SetProjects(projectsFromServer);

				})
				.catch((error) => {
					
					alert(error);
				})
		}, []);
	}
	function GetClients() {

		useEffect(() => {
			const url = 'https://localhost:7137/api/Client/all';

			fetch(url, {
				method: 'GET'
			})
				.then(response => response.json())
				.then(clientsFromServer => {
					SetClients(clientsFromServer);
				})
				.catch((error) => {
					
					alert(error);
				})
		}, []);
	}
	function GetTeamMembers() {
		useEffect(() => {
			const url = 'https://localhost:7137/api/TeamMember/all';

			fetch(url, {
				method: 'GET'
			})
				.then(response => response.json())
				.then(teamMembersFromServer => {

					setTeamMembers(teamMembersFromServer);
				})
				.catch((error) => {
					
					alert(error);
				})
		}, [])
	};
	return (

		<div className="wrapper">
			<section className="content">
				<h2><i className="ico report"></i>Reports</h2>
				<div className="grey-box-wrap reports">
					<ul className="form">
						<li>
							<label>Team member:</label>
							<select value={formData.teamMemberName} onChange={HandleTeamMemberName}>
								<option>All</option>
								{GetTeamMembers()};
								{RenderTeamMembers()};
							</select>
						</li>
						<li>
							<label>Category:</label>
							<select value={formData.categoryName} onChange={HandleCategoryName}>
								<option>All</option>
								{GetCategories()};
								{RenderCategories()};
							</select>
						</li>
					</ul>
					<ul class="form">
						<li>
							<label>Client:</label>
							<select value={formData.clientName} onChange={HandleClientName}>
								<option>All</option>
								{GetClients()};
								{RenderClients()};
							</select>
						</li>
						<li>
							<label>Start date:</label>
							<input type="date" className="in-text datepicker" value={formData.StartDate} onChange={HandleStartDate} />
						</li>
					</ul>
					<ul class="form last">
						<li>
							<label>Project:</label>
							<select value={formData.ProjectName} onChange={HandleProjectName}>
								<option>All</option>
								{GetProjects()};
								{RenderProjects()};
							</select>
						</li>
						<li>
							<label>End date:</label>
							<input type="date" className="in-text datepicker" value={formData.EndDate} onChange={HandleEndDate} />
						</li>
						<li>
							<a href="javascript:;" className="btn orange right" onClick={ResetTable}>Reset</a>
							<a href="javascript:;" className="btn green right" onClick={GetFinalReports}>Search</a>
						</li>
					</ul>
				</div>
				<table className="default-table">
					<tr>
						<th>
							Date
						</th>
						<th>
							Team member
						</th>
						<th>
							Projects
						</th>
						<th>Categories</th>
						<th>Description</th>
						<th className="small">Time</th>
					</tr>
					{isShown && RenderResultsReports()}

				</table>
				<div className="grey-box-wrap reports">
					<div className="btns-inner">
						<a href="javascript:;" className="btn white">
							<span>Print report</span>
						</a>
						<a className="btn white">
							<span>Create PDF</span>
						</a>
						<a href="javascript:;" className="btn white">
							<span>Export to excel</span>
						</a>
					</div>
				</div>
			</section>

		</div>

	)
	function RenderClients() {
		return (
			clients.map((client) => (
				<option key={client.id} value={client.name}>{client.name}</option>
			))
		)
	}
	function RenderCategories() {
		return (
			categories.map((cat) => (
				<option key={cat.id} value={cat.name}>{cat.name}</option>
			))
		)
	}
	function RenderTeamMembers() {
		return (
			teamMembers.map((tm) => (
				<option key={tm.id} value={tm.teamMemberName}>{tm.teamMemberName}</option>
			))
		)
	}
	function RenderProjects() {

		return (
			projects.map((proj) => (
				<option key={proj.id} value={proj.projectName}>{proj.projectName}</option>
			))
		)
	}
	function RenderResultsReports() {

		return (
			reports.map((singleReport) => (

				<tr key = {singleReport}>
					<td>
						{singleReport.startDate}
					</td>
					<td>
						{singleReport.teamMemberName}
					</td>
					<td>
						{singleReport.projectName}
					</td>
					<td>
						{singleReport.categoryName}
					</td>
					<td>
						{singleReport.description}
					</td>
					<td className="small">
						{singleReport.time}
					</td>
				</tr>
			))
		)
	}

}