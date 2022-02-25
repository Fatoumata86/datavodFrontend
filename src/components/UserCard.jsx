import React from "react";
import "./UserCard.css";

export default function UserCard(props) {
	const { avatar, firstName, lastName, userName, city } = props.user;

	return (
		<>
			<div className="card mt-5 mx-2" style={{ width: "18rem" }}>
				<img
					src={`http://localhost:8000${avatar}`}
					className="rounded mx-auto my-2"
					alt={`${userName},avatar`}
				/>
				<div className="container mt-4 card-body">
					<h6 className="card-title">{firstName}</h6>
					<h6 className="card-title">{lastName}</h6>
					<h4 className="card-title">{userName}</h4>
					<p className="card-text">{city}</p>
				</div>
			</div>
		</>
	);
}
