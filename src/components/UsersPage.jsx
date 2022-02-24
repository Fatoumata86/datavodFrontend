import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import UserCard from "./UserCard";

import "./UsersPage.css";

export default function UsersPage() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8000/users/all")
			.then((res) => res.json())
			.then((data) => setUsers(data.users));
	}, []);
	console.log(`users`, users);
	return (
		<>
			<Navbar />
			<div className="card-group">
				<div className="card">
					{users.length !== 0 &&
						users.map((user) => <UserCard user={user} />)}
				</div>
			</div>
		</>
	);
}
