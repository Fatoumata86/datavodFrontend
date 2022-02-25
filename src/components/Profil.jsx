import React, { useEffect, useState } from "react";

export default function Profil(userID, setUserID) {
	const [userId, setUserId] = useState(
		userID ? userID : localStorage.getItem("userId")
	);

	return (
		<>
			<div className="bg-color rounded container m-4 py-2 px-5 col-6"></div>
		</>
	);
}
