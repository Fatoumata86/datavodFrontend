import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<HomePage />}></Route>
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
