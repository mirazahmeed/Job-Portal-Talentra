import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationsList = ({ myApplicationsPromise }) => {
	const applications = use(myApplicationsPromise);
	return (
		<div>
			<h3>Applications List: {applications.length}</h3>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Index</th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{/* row */}
						{applications.map((application, index) => (
							<JobApplicationRow
								key={application._id}
								index={index}
								application={application}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ApplicationsList;
