import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/WelcomePage";
import HomePage from "./components/HomePage";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<Welcome />}></Route>
					<Route path="/homepage" element={<HomePage />}></Route>
					<Route path="/users/signup"></Route>
					<Route path="/users/login"></Route>
					<Route path="/users/all"></Route>
					<Route path="/videos/all"></Route>
					<Route path="*"></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
