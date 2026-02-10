import React, { use, useState } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationsList = ({ myApplicationsPromise }) => {
	const applications = use(myApplicationsPromise);
	const [applicationsList, setApplicationsList] = useState(applications);
	return (
		<div>
			<h3>Applications List: {applicationsList.length}</h3>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Index</th>
							<th>Company</th>
							<th>Job</th>
							<th>Favorite Color</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{/* row */}
						{applicationsList.map((application, index) => (
							<JobApplicationRow
								key={application._id}
								index={index}
								applicationsList={applicationsList}
								setApplicationsList={setApplicationsList}
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
