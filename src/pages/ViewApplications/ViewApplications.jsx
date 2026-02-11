import React from "react";
import { useParams } from "react-router";

const ViewApplications = () => {
	const { id } = useParams();
	return (
		<div>
			<h2>Applications for this job : {id}</h2>
		</div>
	);
};

export default ViewApplications