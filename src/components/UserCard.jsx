import React from "react";
import "./UserCard.css";

export default function UserCard(props) {
	const { avatar, firstName, lastName, userName, city } = props.user;

	return (
		<>
			<div
				className="card my-4 col-4"
				style={{ width: "280px", height: "350px" }}
			>
				<img
					src={`http://localhost:8000${avatar}`}
					className="rounded mx-auto d-block"
					alt={`${userName},avatar`}
				/>
				<div className="container text-center mt-4 card-body">
					<h5 className="card-title">{firstName}</h5>
					<h5 className="card-title">{lastName}</h5>
					<h5 className="card-title">{userName}</h5>
					<p className="card-text">{city}</p>
				</div>
			</div>
		</>
	);
}
