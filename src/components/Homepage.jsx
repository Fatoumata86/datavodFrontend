import axios from "axios";
import React, { useEffect } from "react";
import "./HomePage.css";
import Navbar from "./Navbar";

export default function HomePage() {
	useEffect(() => {
		videoList();
	});
	const videoList = () => {
		axios.get(`http://localhost:8000/videos/all`);
	};
	return (
		<>
			<Navbar />
			<div className="bg-color"></div>
		</>
	);
}
