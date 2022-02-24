import React from "react";
import Navbar from "./Navbar";
import "./WelcomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<div className="homepage d-flex flex-column align-items-center justify-content-center">
				<h3 className="homepage-text fw-bold">
					Need a dose of entertainment ?
				</h3>
				<Link to="/homepage" className="btn homepage-btn">
					Let’s Started
				</Link>
			</div>
		</>
	);
}
