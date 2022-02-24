import React from "react";
import Navbar from "./Navbar";
import "./HomePage.css";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<div className="homepage">
				<div className="ms-5">
					<h3 className="">Need a dose of entertainment ?</h3>
					<button class="btn btn-info ">Let’s Started</button>
				</div>
			</div>
		</>
	);
}
