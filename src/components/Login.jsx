import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login(setUserID) {
	const [userName, setUserName] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();
	const onChangeUserName = (e) => {
		setUserName(e.target.value);
	};
	const onChangePassword = (e) => {
		setPassword(e.target.value);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/users/login", {
				userName: userName,
				password: password,
			})
			.then((res) => {
				console.log(res);
				setUserID(res.data.userId);
				navigate("/users/profil");
			})
			.catch((err) => {
				console.log(err.response);
			});
	};
	return (
		<>
			<div className=" d-flex justify-content-center">
				<form
					onSubmit={onSubmit}
					className="container rounded bg-color mt-4 p-5 col-6"
				>
					<h1 className="text-center">Login</h1>
					<div className="row mb-4">
						<div className="col">
							<div className="form-outline mb-4">
								<label>User name</label>
								<input
									name="userName"
									type="text"
									className="form-control"
									placeholder="Enter User name"
									value={userName}
									onChange={onChangeUserName}
								/>
							</div>
							<div className="form-outline mb-4">
								<label>Password</label>
								<input
									name="password"
									type="password"
									className="form-control"
									placeholder="Enter Password"
									value={password}
									onChange={onChangePassword}
								/>
							</div>
						</div>
					</div>
					<Link to="/users/profil">
						<div className="d-grid gap-2">
							<button
								type="submit"
								className="btn btn-primary mb-4"
							>
								Submit
							</button>
						</div>
					</Link>
					<span className="mb-4">
						If you're new then,
						<Link to="/users/signup">Sign Up </Link>
					</span>
				</form>
			</div>
		</>
	);
}
