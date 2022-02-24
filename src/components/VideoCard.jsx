import React from "react";

export default function VideoCard({ video, user }) {
	return (
		<div className="video-card">
			<video src={video} alt={video.title} controls />
			<h1>{video.title}</h1>
			<img src={user.avatar} alt="" />
		</div>
	);
}
