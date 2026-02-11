import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
	const { job_id } = useParams();
	const applications = useLoaderData();
	return (
		<div>
			<h2>
				Applications for this job : {job_id}
			</h2>
			<p>{applications.length}</p>
		</div>
	);
};

export default ViewApplications;
