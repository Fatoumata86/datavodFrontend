import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import UsersPage from "./components/UsersPage";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profil from "./components/Profil";
import Error404 from "./components/Error404";

function App() {
	const [userID, setUserID] = useState("");
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Welcome />}></Route>
					<Route
						path="/videos/all"
						element={
							<HomePage userID={userID} setUserID={setUserID} />
						}
					></Route>
					<Route
						path="/users/signup"
						element={
							<Signup userID={userID} setUserID={setUserID} />
						}
					></Route>
					<Route
						path="/users/login"
						element={
							<Login userID={userID} setUserID={setUserID} />
						}
					></Route>
					<Route
						path="/users/:id"
						element={
							<Profil userID={userID} setUserID={setUserID} />
						}
					></Route>
					<Route
						path="/users/all"
						element={
							<UsersPage userID={userID} setUserID={setUserID} />
						}
					></Route>
					<Route
						path="/users/:id"
						element={
							<Profil userID={userID} setUserID={setUserID} />
						}
					></Route>
					<Route path="*" element={<Error404 />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
