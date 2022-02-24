import React from "react";
import Navbar from "./Navbar";
import "./WelcomePage.css";
import { Link } from "react-router-dom";

export default function WelcomePage() {
	return (
		<>
			<Navbar />
			<div className="welcomepage d-flex flex-column align-items-center justify-content-center">
				<h3 className="welcomepage-text text-uppercase fw-bold fs-2 py-4">
					Need a dose of entertainment ?
				</h3>
				<Link to="/homePage" className="btn welcomepage-btn">
					Let’s Started
				</Link>
			</div>
		</>
	);
}
