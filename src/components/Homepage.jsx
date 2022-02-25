import React, { useEffect, useState } from "react";
import "./HomePage.css";
import VideoCard from "./VideoCard";

export default function HomePage() {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8000/videos/all")
			.then((res) => res.json())
			.then((data) => setVideos(data.videos));
	}, []);
	console.log(`videos`, videos);
	return (
		<>
			{videos.length !== 0 &&
				videos.map((video) => <VideoCard video={video} />)}
		</>
	);
}
