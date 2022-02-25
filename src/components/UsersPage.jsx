import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

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
			<div className="bg-color d-flex justify-content-center flex-wrap mt-5">
				{users.length !== 0 &&
					users.map((user) => <UserCard user={user} />)}
			</div>
		</>
	);
}
