import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import UsersPage from "./components/UsersPage";
import VideoCard from "./components/VideoCard";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profil from "./components/Profil";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Welcome />}></Route>
					<Route path="/homepage" element={<HomePage />}></Route>
					<Route path="/users/signup" element={<Signup />}></Route>
					<Route path="/users/login" element={<Login />}></Route>
					<Route path="/users/:id" element={<Profil />}></Route>
					<Route path="/users/all" element={<UsersPage />}></Route>
					<Route path="/videos/all" element={<VideoCard />}></Route>
					<Route path="*"></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
