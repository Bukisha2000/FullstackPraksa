import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import TimeSheet from "./TimeSheet"
import Clients from "./Clients"
import Projects from "./Projects"
import Reports from "./Reports"
import Categories from "./Categories"
import TeamMembers from "./TeamMember"


export default function Header() {
	return (
		<Router>
			<header className="header">

				<div className="top-bar"></div>
				<div className="wrapper">
					<a href="index.html" className="logo">
						<img src={require("./assets/img/logo.png")} alt="VegaITSourcing Timesheet" />
					</a>
					<ul className="user right">
						<li>

							<a href="javascript:;">Sladjana Miljanovic</a>
							<div className="invisible"></div>
							<div className="user-menu">
								<ul>

									<li>
										<p>Change password</p>
									</li>
									<li>
										<p>Settings</p>
									</li>
									<li>
										<p>Export all data</p>
									</li>
								</ul>
							</div>
						</li>
						<li className="last">
							<p>Logout</p>
						</li>
					</ul>
					<nav>

						<ul className="menu">
							<li>

								<Link to="/TimeSheet" className="btn nav">TimeSheet</Link>
							</li>
							<li>

								<Link to="/Clients" className="btn nav">Clients</Link>
							</li>
							<li>
								<Link to="/Projects" className="btn nav">Projects</Link>
							</li>
							<li>
								<Link to="/Categories" className="btn nav">Categories</Link>
							</li>
							<li>
								<Link to="/TeamMembers" className="btn nav">TeamMembers</Link>
							</li>
							<li>
								<Link to="/Reports" className="btn nav">Reports</Link>
							</li>

						</ul>
						<Routes>
							<Route path="/Clients" element={<Clients />} />
							<Route path="/Projects" element={<Projects />} />
							<Route path="/Categories" element={<Categories />} />
							<Route path="/TeamMembers" element={<TeamMembers />} />
							<Route path="/Reports" element={<Reports />} />
							<Route path="/TimeSheet" element={<TimeSheet />} />
						</Routes>
						
						<span className="line"></span>
					</nav>
				</div>

			</header>

		</Router>
	)
}