import React from "react";

export default function VideoCard(props) {
	const { title, description, userId, video } = props.video;

	return (
		<div className="video-card">
			<video src={`http://localhost:8000${video}`} alt={title} controls />
			<h1>{title}</h1>
			<p>{description}</p>
			<img src={userId} alt="" />
		</div>
	);
}
