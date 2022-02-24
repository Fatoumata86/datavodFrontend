import React from "react";
import "./UserCard.css";

export default function UserCard(props) {
	const { avatar, firstName, lastName, userName, city } = props.user;

	return (
		<>
			<div className="card my-3 rounded" style={{ width: "18rem" }}>
				<img
					src={`http://localhost:8000${avatar}`}
					className="card-img-top"
					alt={`${userName},avatar`}
				/>
				<div className="card-body">
					<h5 className="card-title">{firstName}</h5>
					<h5 className="card-title">{lastName}</h5>
					<h5 className="card-title">{userName}</h5>
					<p className="card-text">{city}</p>
				</div>
			</div>
		</>
	);
}
