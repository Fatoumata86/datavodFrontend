import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(setUserID) {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const firstNameChange = (e) => {
		setFirstName(e.target.value);
	};
	const lastNameChange = (e) => {
		setLastName(e.target.value);
	};
	const userNameChange = (e) => {
		setUsername(e.target.value);
	};
	const emailChange = (e) => {
		setEmail(e.target.value);
	};
	const passwordChange = (e) => {
		setPassword(e.target.value);
	};
	const passwordConfirmChange = (e) => {
		setPasswordConfirm(e.target.value);
	};

	const handleSignup = (e) => {
		e.preventDefault();
		fetch("http://localhost:8000/users/signup", {
			firstName,
			lastName,
			userName,
			email,
			password,
			passwordConfirm,
		})
			.then((res) => {
				console.log(res);
				localStorage.setItem("userId", res.data.user._id);
				setUserID(res.data.user._id);
				navigate("/users/profile");
			})
			.catch((e) => {
				console.log("error", e.response);
			});
	};
	return (
		<>
			<div className="signupForm">
				<form onSubmit={handleSignup}>
					<h1>SignUp</h1>
					<div className="form-group">
						<label>First name</label>
						<input
							name="firstName"
							type="text"
							className="form-control"
							placeholder="Enter First name"
							value={firstName}
							onChange={firstNameChange}
						/>
					</div>
					<div className="form-group">
						<label>Last name</label>
						<input
							name="lastName"
							type="text"
							className="form-control"
							placeholder="Enter Last name"
							value={lastName}
							onChange={lastNameChange}
						/>
					</div>
					<div className="form-group">
						<label>User name</label>
						<input
							name="userName"
							type="text"
							className="form-control"
							placeholder="Enter User name"
							value={userName}
							onChange={userNameChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							name="email"
							type="email"
							className="form-control"
							placeholder="Enter Email"
							value={email}
							onChange={emailChange}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							name="password"
							type="password"
							className="form-control"
							placeholder="Enter Password"
							value={password}
							onChange={passwordChange}
						/>
					</div>
					<div className="form-group">
						<label>Confirm password</label>
						<input
							name="passwordConfirm"
							type="passwordConfirm"
							className="form-control"
							placeholder="Confirm your password"
							value={passwordConfirm}
							onChange={passwordConfirmChange}
						/>
					</div>
					<Link to="/users/:id">
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</Link>
				</form>
			</div>
		</>
	);
}
