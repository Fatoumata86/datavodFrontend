import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(setUserID) {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUsername] = useState("");
	const [city, setCity] = useState("");
	const [avatar, setAvatar] = useState("");
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
	const cityChange = (e) => {
		setCity(e.target.value);
	};
	const avatarChange = (e) => {
		setAvatar(e.target.value);
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
			city,
			avatar,
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
			<div className="bg-color d-flex justify-content-center">
				<form onSubmit={handleSignup} className="container p-5 col-6">
					<h1 className="text-center">SignUp</h1>
					<div className="row mb-4">
						<div className="col">
							<div className="form-outline">
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
						</div>
						<div className="col">
							<div className="form-outline">
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
						</div>
					</div>
					<div className="row mb-4">
						<div className="col">
							<div className="form-outline">
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
						</div>
						<div className="col">
							<div className="form-outline">
								<label>City</label>
								<input
									name="city"
									type="text"
									className="form-control"
									placeholder="Enter City"
									value={city}
									onChange={cityChange}
								/>
							</div>
						</div>
					</div>
					<div className="form-outline mb-4">
						<label for="formFile">Avatar</label>
						<input
							name="avatar"
							class="form-control"
							type="file"
							id="formFile"
							value={avatar}
							onChange={avatarChange}
						/>
					</div>
					<div className="form-outline mb-4">
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
					<div className="form-outline mb-4">
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
					<div className="form-outline mb-4">
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
						<div className="d-grid gap-2">
							<button
								type="submit"
								className="btn btn-primary mb-4"
							>
								Submit
							</button>
						</div>
					</Link>
				</form>
			</div>
		</>
	);
}
