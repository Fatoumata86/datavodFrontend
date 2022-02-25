import React, { useEffect, useState } from "react";
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
			<div className="bg-color">
				<div className="d-flex justify-content-around flex-wrap my-5">
					{users.length !== 0 &&
						users.map((user) => <UserCard user={user} />)}
				</div>
			</div>
		</>
	);
}
